# Backend Server Setup

This server handles contact form submissions and sends emails using nodemailer.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the `server` directory with the following variables:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

3. For Gmail, you'll need to:
   - Enable 2-Factor Authentication on your Google account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the App Password as `EMAIL_PASS` (not your regular password)

4. Start the server:
```bash
npm run server
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

