// Importar el módulo Nodemailer
const nodemailer = require('nodemailer');

// Configurar el transporte de correo
// goDaddy
const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465, // o 587 si es el puerto correspondiente
  secure: true,
  auth: {
    user: 'support@appvinc.com',
    pass: '3207602379'
  }
});

// Enviar el correo
module.exports = {
  sendEmail(mailOptions) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });
  }
}

