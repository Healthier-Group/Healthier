const nodemailer = require ("nodemailer");

//mailtrap de prueba
// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "0c995643b419c7",
//       pass: "8a6f0b2700de12"
//     }    
//   });

const createTransporter = () => {
    var transport = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        auth: {
          user: "apikey",
          pass: "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"
        }
      });

    return transport; 
}
//Registro exitoso
const sendMail = async (usuario) => {
  await console.log("Estamos en sendMail:", usuario)
    const transporter = createTransporter();
    const info = await transporter.sendMail({
        from: '"Healthier Group" <sergionicolassud@gmail.com>',
        to: `${usuario.email}`,
        // to: ["sergionicolassud@gmail.com", "santiagozapata07@gmail.com"],
        subject: 'Bienvenido a Healthier Group',
        html: "<p>Bienvenido a Healthier group</p>"
    })
    console.log("Message sent:", info.messageId);
    return
}

//module.exports = sendMail()

exports.sendMail = (usuario) => sendMail(usuario)

