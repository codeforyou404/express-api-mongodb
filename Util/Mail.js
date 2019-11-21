var nodemailer = require('nodemailer');
exports.sendmail = function (data) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codeforyou404@gmail.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'codeforyou404@gmail.com',
    to: 'saurabhbhorkar90@gmail.com',
    subject: 'Sending Email using Node.js',
    text: JSON.stringify(data)
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });  
};
