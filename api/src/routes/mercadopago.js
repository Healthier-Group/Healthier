const {OrderMp, Historyorder} = require('../db.js');
const server = require('express').Router()
const mercadopago = require('mercadopago')
const emailer = require("../../src/emailer")

mercadopago.configure({access_token: 'TEST-4177121794319246-071405-45ab153c0cd3fd9ca748978856960753-372500284'})

var mail = "";
var orden = {};
var carro = [];

server.post('/', (req, res, next) => {
  const bodyOrder = req.body.currentUserOrder;
  const {currentUser} = req.body;
  const id_orden= bodyOrder.id//order.id
  const email = currentUser.email;
  let carrito = req.body.products;
  mail = email;
  carro = carrito.map( p => {
    return `2 x ${p.name} = ${p.price * 2}`
  });
  orden = bodyOrder;
  console.log("esto es back carrito", carrito)
  console.log("esta es la orden completa:", bodyOrder)
  console.log('este es el currentUser: ', currentUser);
  const items_ml = carrito.map(i => ({
    title: i.name,
    unit_price: i.price,
    quantity: i.qty,
    picture_url:i.image
  }))
  let preference = {
    items: items_ml,
    external_reference : `${id_orden}`,
    back_urls: {
        success: 'http://localhost:3001/mercadopago/pagos',
        failure: 'http://localhost:3001/mercadopago/pagos',
        pending: 'http://localhost:3001/mercadopago/pagos',
    }
  }
  mercadopago.preferences.create(preference)
    .then(function(response){
    console.info('respondio')
    //Este valor reemplazará el string"<%= global.id %>" en tu HTML
    global.id = response.body.init_point
    res.json({ link: global.id });
      Historyorder.create({

      })
    })
    .catch(function(error){
    console.log(error);
    })
})

server.get("/pagos", async (req, res)=>{
  console.info("EN LA RUTA PAGOS ");
  try{
    await console.log("-----------------------------------ENTRÉ AL TRY---");
    await console.log("Carrito: ", carro, "\nOrden:", orden, "\nMail:", mail)
    await Historyorder.create({
      fullName: orden.fullName,
      total: orden.total || 1,
      address: orden.address,
      city: orden.city,
      postalCode: orden.postalCode,
      paymentMethod: "MercadoPago",       
      state: "Success",
      shippingState: "To-Dispatch",
      products: carro,
      userId: orden.userId
    });
    await console.log("primer paso (create)");
    await emailer.sendMailOrder(mail)
    await console.log("segundo paso (mail)");
    
    return res.redirect("http://localhost:3000")
  }
  catch(err){
    console.error('error al buscar', err)
    return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
  }
})
   
  //proceso los datos del pago 
  //redirijo de nuevo a react con mensaje de exito, falla o pendiente



module.exports = server;


// const payment_id= req.query.payment_id;
// const payment_status= req.query.status;
// const external_reference = req.query.external_reference;
// const merchant_order_id= req.query.merchant_order_id;