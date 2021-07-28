const {OrderMp, Historyorder} = require('../db.js');
const server = require('express').Router()
const mercadopago = require('mercadopago')
const emailer = require("../../src/emailerOrder")

mercadopago.configure({access_token: 'TEST-4177121794319246-071405-45ab153c0cd3fd9ca748978856960753-372500284'})

server.post('/', (req, res, next) => {
    const id_orden= 'Orden de compra'//order.id
    const bodyOrder = req.body.currentUserOrder;
    let carrito = req.body.products;
    console.log("esto es back carrito", carrito)
    console.log("esta es la orden completa:", bodyOrder)
    /********************************************************************* */
    /********ORDER PRODUCT ****************** */
    /********************************************************************** */
    // esto es back carrito [
    //   {
    //     id: 2,
    //     name: 'Alfajor De Almendras Nativo - Dulce De Leche - 60g',    
    //     image: 'https://i.postimg.cc/G2qV5pHj/alfajor-nativos-dulce-de-leche11-d66b41928c3da5d7c315778961998660-1024-102411-fdce70190b5622c2981581.jpg',
    //     price: 103,
    //     product: 12,
    //     countInStock: 10,
    //     qty: 10
    //   },
    //   {
    //     id: 1,
    //     name: 'Barrita de arroz sabor chocolate negro Crowie',
    //     image: 'https://i.postimg.cc/TwRB0bYw/choco-negro1-d60b8debcc5af1302615510487738179-640-01-0944a331959ac7d19415813782701700-1024-1024.jpg',
    //     price: 41,
    //     product: 11,
    //     countInStock: 10,
    //     qty: 4
    //   }
    // ]
    /********************************************************************* */
    /********ORDEN COMPLETA ****************** */
    /********************************************************************** */
    // esta es la orden completa: {
    //   id: 2,
    //   total: 1194,
    //   paymentMethod: 'Mercado Pago',
    //   fullName: 'Ramiro',
    //   address: 'Gilardo Gilardi 1655, Los Naranjos',
    //   city: 'Cordoba',
    //   postalCode: 5010,
    //   isPaid: null,
    //   createdAt: '2021-07-28T14:41:26.772Z',
    //   updatedAt: '2021-07-28T14:53:27.269Z',
    //   userId: 8,
    //   orderproducts: [
    //     {
    //       id: 2,
    //       quantity: 10,
    //       createdAt: '2021-07-28T14:43:04.603Z',
    //       updatedAt: '2021-07-28T14:43:26.577Z',
    //       orderId: 2
    //     },
    //     {
    //       id: 1,
    //       quantity: 4,
    //       createdAt: '2021-07-28T14:43:02.351Z',
    //       updatedAt: '2021-07-28T14:43:29.576Z',
    //       orderId: 2
    //     }
    //   ]
    // }

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
                  },
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

server.get("/pagos", (req, res)=>{
    console.info("EN LA RUTA PAGOS ")
    const payment_id= req.query.payment_id
    const payment_status= req.query.status
    const external_reference = req.query.external_reference
    const merchant_order_id= req.query.merchant_order_id
 //Correo

  emailer.sendMailOrder("sotelosergion@gmail.com")
 
  //Aquí edito el status de mi orden
  OrderMp.findByPk(external_reference)
  .then((order) => {
    order.payment_id= payment_id
    order.payment_status= payment_status
    order.merchant_order_id = merchant_order_id
    order.status = "completed"
    console.info('Salvando order')
    order.save()
    .then( 
      Historyorder.create({
        fullName: bodyOrder.fullName,
        total: bodyOrder.total,
        address: bodyOrder.address,
        city: bodyOrder.city,
        postalCode: bodyOrder.postalCode,
        paymentMethod: bodyOrder.paymentMethod,       
        state: "Success",
        shippingState: "To-Dispatch",
        products: carrito,
        userId: bodyOrder.userId
      })
    ).catch(err => console.log(err))
    .then((_) => {
      console.info('redirect success')
      return res.redirect("http://localhost:3000")
    })
    .catch((err) =>{
      console.error('error al salvar', err)
      return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
    })
  })
  .catch(err =>{
    console.error('error al buscar', err)
    return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
  })
  //proceso los datos del pago 
  //redirijo de nuevo a react con mensaje de exito, falla o pendiente
})

//Busco información de una orden de pago
server.get("/pagos/:id", (req, res)=>{
  const mp = new mercadopago(ACCESS_TOKEN)
  const id = req.params.id
  console.info("Buscando el id", id)
  mp.get(`/v1/payments/search`, {'status': 'pending'}) //{"external_reference":id})
  .then(resultado  => {
    console.info('resultado', resultado)
    res.json({"resultado": resultado})
  })
  .catch(err => {
    console.error('No se consulto:', err)
    res.json({
      error: err
    })
  })
})
module.exports = server;

// let preference = {
        //     items:[
        //         {
        //             id:'',
        //             title:'',
        //             currency_id:'ARS',
        //             picture_url:'',
        //             quantity: 000,
        //             unit_price: 0.23
        //         }
        //     ],
        //     payer:{
        //             name:'',
        //             surname:'',
        //             email:'',
        //             phone:{
        //                 number:''
        //             },
        //             identification:{
        //                 type:'DNI',
        //                 number:''
        //             },
        //             address:{
        //                 street_name:'',
        //                 street_number: 123,
        //                 zip_code:''
        //             },
        //         },
        //     back_urls:{
        //         success:'',
        //         failure:'',
        //         pending:''
        //     },
        //     auto_return: 'approved',
        
        // } 

