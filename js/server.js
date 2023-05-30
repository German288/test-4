app.post('/send-email', function(req, res) {
    // Extract the form data from the request body
    const { user_name, user_phone, child_name, child_age, course_name, child_phone } = req.body;
  
    // Create the email message using the form data
    const message = `
      <p><strong>User Name:</strong> ${user_name}</p>
      <p><strong>User Phone:</strong> ${user_phone}</p>
      <p><strong>Child Name:</strong> ${child_name}</p>
      <p><strong>Child Age:</strong> ${child_age}</p>
      <p><strong>Course Name:</strong> ${course_name}</p>
      <p><strong>Child Phone:</strong> ${child_phone}</p>
    `;
  
    // Configure Nodemailer to send the email
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // Set to true if using a secure connection (TLS/SSL)
      auth: {
        user: 'oleg2000lol228@gmail.com',
        pass: 'oleg2000228'
      }
    });
  
    // Define the email options
    const mailOptions = {
      from: 'oleg2000lol228@gmail.com',
      to: 'millergerman277@gmail.com',
      subject: 'Form Submission',
      html: message
    };
  
    // Send the email
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ success: true });
      }
    });
  });
  
  // Start the server
  app.listen(3000, function() {
    console.log('Server started on port 3000');
  });