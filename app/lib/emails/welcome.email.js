
const { sendEmail } = require('./emailSender');
// Configurar los datos del correo
const mailOptions = (user) => {
    return {
        from: process.env.EMAIL_FROM || 'support@appvinc.com',
        to: user.email,
        subject: '¡Hola! ' + " " + (user?.name || ""),
        html: `
        <!DOCTYPE html>
        <!DOCTYPE html>
        <html>
        <head>
          <title>Bienvenido a nuestra App</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
          <style>
            body {
              background-color: #f7f7f7;
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
        
            .container {
              background-color: #ffffff;
              max-width: 500px;
              margin: 0 auto;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              border: 1px solid #e1e1e1;
            }
        
            .header {
              background-color: #50bded;
              padding: 5px;
              color: #ffffff;
              border-radius: 5px;
              margin-bottom: 10px;
              height: 85px;
            }
        
            .header__title {
              text-align: center;
            }
        
            .logo {
              width: 100px;
              margin: 0 auto;
              display: block;
              background-color: #ffffff;
              border-radius: 10px;
              padding: 5px;
            }
        
            .welcome-message {
              font-size: 24px;
              text-align: center;
              margin-bottom: 30px;
              line-height: 1.5;
            }
        
            .love-image {
              width: 200px;
              margin: 0 auto;
              display: block;
              margin-bottom: 50px;
            }
        
            .button-container {
              text-align: center;
            }
        
            .button {
              display: inline-block;
              background-color: #2098d1;
              color: #ffffff;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
            }
        
            .button:hover {
              background-color: #107ac1;
            }
        
            .chat-icons {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 30px;
            }
        
            .chat-icons i {
              font-size: 32px;
              color: #2098d1;
              margin: 10px;
              transition: color 0.3s ease;
            }
        
            .chat-icons i:hover {
              color: #107ac1;
            }
        
            .chat-icons label {
              font-size: 14px;
              color: #777777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/connect-e76fc.appspot.com/o/icons%2FsvgLogoComplete-93c9cb48%20(1).png?alt=media&token=7a382054-6935-4034-853b-cc5aa8580236" alt="Logo de la App">
              <h1 class="header__title">Bienvenido a nuestra App</h1>
            </div>
        
            <div class="welcome-message">
              <p class="welcome-message__text">¡Hola! ${(user?.name || "")}</p>
              <p class="welcome-message__text">Te damos la bienvenida a Vinc. Estamos encantados de tenerte a bordo.</p>
              <p class="welcome-message__text">Queremos asegurarnos de que aproveches al máximo todas las características y funciones que ofrecemos.</p>
            </div>            
                        
            <div class="functionsApp-button">Video Llamadas </div>
            <div class="functionsApp-button">Llamadas Aleatorial</div>
            <div class="functionsApp-button">Chat Aleatorial</div>
            <div class="functionsApp-button">Encontrar personas Segun tus preferencias</div>                 
        
            <div class="button-container">
              <p class="welcome-message__text">Para comenzar, simplemente haz clic en el botón de abajo para iniciar sesión en tu cuenta.</p>
              <a href="${process.env.FRONTEND || 'http://localhost:5173/'}" class="button floating-button">Iniciar Sesión</a>
            </div>
        
            .
            <div class="chat-icons">
              <label>Contacta con nosotros:</label>              
            </div>
          </div>       
          
        </body>
        </html>
        
    `
    }
};

// Enviar el correo
module.exports = {
    welcomeMessage: async (user) => {
        await sendEmail(mailOptions(user));
    }
}

