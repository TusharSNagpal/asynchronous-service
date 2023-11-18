const nodemailer = require('nodemailer');

require('dotenv').config();

const user = process.env.USER;
const pass = process.env.PASS;

const sendEmail = (msgArray) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass
    }
  });

  var mailOptions = {
    from: user,
    to: `${msgArray[0]}`,
    subject: `${msgArray[1]}`,
    text: `${msgArray[2]}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail;