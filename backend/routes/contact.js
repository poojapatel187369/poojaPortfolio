import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

// Nodemailer configuration with better error handling
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Test email configuration
const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is correct');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    return false;
  }
};

// Test on startup
testEmailConfig();

router.post('/', async (req, res) => {
  try {
    console.log('📨 CONTACT FORM RECEIVED:', req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address'
      });
    }

    // ✅ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log('✅ Contact saved in DB');

    // ✅ Send Email
    const transporter = createTransporter();
    
    const mailOptions = {
      from: {
        name: 'Portfolio Contact',
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name} - Portfolio Contact`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 5px;">
            <p style="margin: 0; color: #0056b3;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message:
${message}

Timestamp: ${new Date().toLocaleString()}
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });

  } catch (error) {
    console.error('❌ Error in contact route:', error);
    
    // More specific error messages
    let errorMessage = 'Something went wrong. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email configuration error. Please check email settings.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to email service. Please try again later.';
    }

    res.status(500).json({ 
      success: false, 
      error: errorMessage 
    });
  }
});

export default router;
