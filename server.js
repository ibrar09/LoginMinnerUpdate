// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Route to handle contact form submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
    auth: {
      user: 'seibrarahmad@gmail.com', // Replace with your email
      pass: 'xqloyykktrdlmuny'   // Replace with your email password or app-specific password
    }
  });

  // Email content
  let mailOptions = {
    from: 'seibrarahmad@gmail.com',
    to: 'seibrarahmad@gmail.com', // The email where you want to receive messages
    subject: `New message from ${name}`,
    text: message
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).send('Failed to send email.');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
