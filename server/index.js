const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend
let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('✅ Resend initialized successfully');
} else {
  console.warn('\n⚠️  WARNING: Resend API key not configured!');
  console.warn('Please set RESEND_API_KEY in Railway environment variables.');
  console.warn('Get your API key from: https://resend.com/api-keys\n');
}

// Middleware
// CORS configuration - allow requests from frontend
// In production, set FRONTEND_URL environment variable to your frontend domain
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Normalize origin by removing trailing slash
    const normalizedOrigin = origin.replace(/\/$/, '');
    
    // Get allowed origin from environment variable (remove trailing slash)
    const allowedOrigin = process.env.FRONTEND_URL 
      ? process.env.FRONTEND_URL.trim().replace(/\/$/, '')
      : '*';
    
    // Check if origin matches (normalized, handles trailing slash differences)
    if (allowedOrigin === '*' || normalizedOrigin === allowedOrigin) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked: ${normalizedOrigin} not in allowed origins`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email configuration
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'; // Default Resend domain
const TO_EMAIL = process.env.TO_EMAIL || process.env.EMAIL_USER || 'rodmayol82@gmail.com';

if (resend) {
  console.log(`📧 Email will be sent from: ${FROM_EMAIL}`);
  console.log(`📧 Email will be sent to: ${TO_EMAIL}`);
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Check if Resend is configured
    if (!resend) {
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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
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
    });

    if (error) {
      console.error('\n❌ Error sending email via Resend:');
      console.error('Error:', error);
      
      // Check if it's a domain verification error
      if (error.message && error.message.includes('domain is not verified')) {
        console.error('\n💡 Domain verification error detected!');
        console.error('💡 Either:');
        console.error('   1. Verify your domain at https://resend.com/domains');
        console.error('   2. Remove FROM_EMAIL from Railway to use onboarding@resend.dev');
        console.error(`   Current FROM_EMAIL: ${FROM_EMAIL}\n`);
        
        return res.status(500).json({ 
          success: false, 
          message: 'Email domain not verified. Please verify your domain in Resend or use the default sender.' 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to send email. Please try again later.' 
      });
    }

    console.log(`✅ Email sent successfully from ${email} to ${TO_EMAIL}`);
    console.log(`📧 Resend ID: ${data?.id}`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('\n❌ Error sending email:');
    console.error('Error:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
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

