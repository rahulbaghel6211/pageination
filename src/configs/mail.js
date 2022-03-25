const nodemailer = require("nodemailer"); 


module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "3ef00774280d98",  // generated ethereal user
      pass: "f271eb79cc8170"// generated ethereal password
    },
  });