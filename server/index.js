const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Check if email credentials are configured
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('\n⚠️  WARNING: Email credentials not configured!');
  console.warn('Please create a .env file in the server directory with:');
  console.warn('EMAIL_USER=your-email@gmail.com');
  console.warn('EMAIL_PASS=your-app-password');
  console.warn('PORT=5000\n');
  console.warn('See SETUP.md for detailed instructions.\n');
}

// Middleware
// CORS configuration - allow requests from frontend
// In production, set FRONTEND_URL environment variable to your frontend domain
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Allow all in dev, restrict in production
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for nodemailer (only if credentials exist)
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  // Try port 465 (SSL) first - more reliable from cloud platforms
  // If that fails, the code will fall back to port 587
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER.trim(),
      pass: process.env.EMAIL_PASS.trim()
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates
    },
    connectionTimeout: 20000, // 20 seconds
    greetingTimeout: 20000,
    socketTimeout: 20000,
    pool: true, // Use connection pooling
    maxConnections: 1,
    maxMessages: 3
  });

  // Verify transporter configuration with better error handling
  // Try port 465 first, if it fails, create a fallback with port 587
  transporter.verify((error, success) => {
    if (error) {
      console.warn('\n⚠️  Port 465 (SSL) failed, trying port 587 (TLS)...');
      console.warn('Error:', error.message);
      
      // Create fallback transporter with port 587
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER.trim(),
          pass: process.env.EMAIL_PASS.trim()
        },
        tls: {
          rejectUnauthorized: false
        },
        connectionTimeout: 20000,
        greetingTimeout: 20000,
        socketTimeout: 20000
      });
      
      // Try verifying with port 587
      transporter.verify((error2, success2) => {
        if (error2) {
          console.error('\n❌ Both ports failed. Connection timeout issue.');
          console.error('Error code:', error2.code);
          console.error('Error message:', error2.message);
          console.error('\n💡 This is likely a network/firewall issue from Railway.');
          console.error('💡 Consider using a cloud email service like Resend (free tier available)');
          console.error('\nTroubleshooting:');
          console.error('1. Verify EMAIL_USER:', process.env.EMAIL_USER ? 'Set ✓' : 'Missing ✗');
          console.error('2. Verify EMAIL_PASS is correct (16 chars, no spaces)');
          console.error('3. Gmail may be blocking Railway IPs - try Resend instead\n');
        } else {
          console.log('✅ Email transporter verified successfully (port 587)');
          console.log('✅ Server is ready to send emails');
        }
      });
    } else {
      console.log('✅ Email transporter verified successfully (port 465)');
      console.log('✅ Server is ready to send emails');
    }
  });
} else {
  console.log('⚠️  Email functionality disabled - credentials not configured');
  console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Missing');
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Missing');
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Check if email is configured
    if (!transporter) {
      return res.status(503).json({ 
        success: false, 
        message: 'Email service is not configured. Please contact the administrator.' 
      });
    }

    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow reply directly to the sender
      subject: `Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111827; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Project Inquiry
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px;">
              <p style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
        New Project Inquiry
        
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully from ${email} to ${process.env.EMAIL_USER}`);
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('\n❌ Error sending email:');
    console.error('Error code:', error.code);
    console.error('Error command:', error.command);
    console.error('Error message:', error.message);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNECTION') {
      errorMessage = 'Connection timeout. Please check email configuration.';
    } else if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check email credentials.';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio Backend API is running',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)'
    }
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found',
    availableRoutes: {
      health: 'GET /api/health',
      contact: 'POST /api/contact'
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

