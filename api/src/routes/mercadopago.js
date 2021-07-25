const {OrderMp} = require('../db.js');
const server = require('express').Router()
const mercadopago = require('mercadopago')

mercadopago.configure({access_token: 'TEST-4177121794319246-071405-45ab153c0cd3fd9ca748978856960753-372500284'})

server.post('/', (req, res, next) => {
    const id_orden= 'Orden de compra'
    let carrito = req.body
    console.log("esto es back carrito", carrito)
    // const carrito = [
    //     {title: "Producto 1", quantity: 5, price: 10.52},
    //     {title: "Producto 2", quantity: 15, price: 100.52},
    //     {title: "Producto 3", quantity: 6, price: 200}
    //   ]

      const items_ml = carrito?.map(i => ({
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
    console.log(response.body)
    res.json({ link: global.id });
    
    })
    .catch(function(error){
    console.log(error);
    })
})

server.get("/pagos", (req, res)=>{
    console.info("EN LA RUTA PAGOS ", req)
    const payment_id= req.query.payment_id
    const payment_status= req.query.status
    const external_reference = req.query.external_reference
    const merchant_order_id= req.query.merchant_order_id
    console.log("EXTERNAL REFERENCE ", external_reference)

  //Aquí edito el status de mi orden
  OrderMp.findByPk(external_reference)
  .then((order) => {
    order.payment_id= payment_id
    order.payment_status= payment_status
    order.merchant_order_id = merchant_order_id
    order.status = "completed"
    console.info('Salvando order')
    order.save()
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

