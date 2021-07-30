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
const sendMailRegister = async (usuario) => {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
        from: '"Healthier Group" <santiagozapata07@gmail.com>',
        to: `${usuario.email}`,
      
        subject: 'Bienvenido a Healthier Group',
        html: "<p>Bienvenido a Healthier group</p>"
    })
    console.log("Message sent:", info.messageId);

    return
}
//confirmacion de compra -- debería ejecutarse cuando se va a mercadopago
const sendMailOrder = async (str) => {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
        from: '"Healthier Group" <santiagozapata07@gmail.com>',
        to: `${str}`,
       
        subject: 'Tu compra fue aprobada',
        html: "<p>¡Gracias por tu compra!</p> <br /> <p>Pronto te llegará la información de seguimiento.</p>"
    })
    console.log("Message sent:", info.messageId);

    return
}

//compra despachada -- debería ejecutarse cuando la orden pasa a history
const sendMailOrderSent = async (usuario) => {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
        from: '"Healthier Group" <santiagozapata07@gmail.com>',
        // to: `${usuario.email}`,
        to: ["sergionicolassud@gmail.com", "santiagozapata07@gmail.com"],
        subject: 'Tu orden está en camino',
        html: "<p>Bienvenido a Healthier group</p>"
    })
    console.log("Message sent:", info.messageId);

    return
}


exports.sendMailRegister = (usuario) => sendMailRegister(usuario)
exports.sendMailOrder = (str) => sendMailOrder(str)
exports.sendMailOrderSent = (usuario) => sendMailOrder(usuario)

