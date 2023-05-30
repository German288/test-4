const nodemailer = require("nodemailer");

// Create a transporter object with your email service provider's SMTP settings
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
  text: 'A form has been submitted.',
  html: '<p>A form has been submitted.</p>'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

$(document).ready(function() {
    $('#submitButton').click(function(e) {
      e.preventDefault();
  
      var user_name = $('#fullname').val();
      var user_phone = $('#phoneparent').val();
      var child_name = $('#namechild').val();
      var child_age = $('#number').val();
      var course_name = $('#namecourse').val();
      var child_phone = $('#telephone').val();
  
      // AJAX request to send form data to the server
      $.ajax({
        url: '/send-email',
        method: 'POST',
        data: {
          user_name: user_name,
          user_phone: user_phone,
          child_name: child_name,
          child_age: child_age,
          course_name: course_name,
          child_phone: child_phone
        },
        success: function(response) {
          console.log(response);
          alert('Form submitted successfully!');
        },
        error: function(xhr, status, error) {
          console.error(error);
          alert('Error submitting form.');
        }
      });
    });
  });