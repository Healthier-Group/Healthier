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
        html: "<h3>Su registro ha sido exitoso</h3><br/><h4>Bienvenido a Healthier grouh4</p>"
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
        html: "<h3>¡Gracias por tu compra!</h3> <br /> <h4>Pronto te llegará la información de seguimiento.</h4>"
    })
    console.log("Message sent:", info.messageId);

    return
}

//compra despachada -- debería ejecutarse cuando la orden pasa a history
const sendMailOrderSent = async (string) => {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
        from: '"Healthier Group" <santiagozapata07@gmail.com>',
        // to: ["noriega.95@gmail.com", "edgarmontenegro321@gmail.com"],
        to: string,
        subject: 'Tu orden está en camino',
        html: "<h3>El pago fue aprobado</h3><br /> <h4>Su producto ha sido despachado.</h4>"
    })
    console.log("Message sent:", info.messageId);

    return
}


exports.sendMailRegister = (usuario) => sendMailRegister(usuario)
exports.sendMailOrder = (str) => sendMailOrder(str)
exports.sendMailOrderSent = (string) => sendMailOrderSent(string)

