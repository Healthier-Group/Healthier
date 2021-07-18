const {server} = require('./src/app.js');
const {conn, Product} = require('./src/db.js');
const {userMockUp, adminMockUp} = require('./src/utils/mockUps/users')



conn.sync({ force: true }).then(async() => {
    await server.listen(process.env.PORT, async() => {
    console.log('Healthier API is now listening at port 3001');

    await adminMockUp();
    await userMockUp();
  
    let p1 = Product.findOrCreate({
      where:{
        name: "Frutos secos deshidratados",
        description: "Frutos secos deshidratados y confitados. Precio por 250g.",
        ingredients: "Banana, manzana, naranja, durazno, agua, saborizantes y edulcorantes naturales.",
        price: 500,
        sku:"a1",
        size: "400 g",
        brand:"San Carlos de Asis",
        image:"https://i.postimg.cc/RhpJVMrM/andrey-metelev-Q4-STMNFlo-I-unsplash.jpg"
      }
    })
    let p2 = Product.findOrCreate({
      where: {
        name:"Gomitas CHU pre-workout",
        description:"Golosina masticable sabor a arándano.",
        ingredients:"Beta Alanine 2500mg, L-Citrulline 2000mg, Betaine Hydrochloride 500mg, L-Tyrosine 200mg, L- Taurine 200mg, Caffeine 200mg, Vitamin C 100mg (125% NRV), Zinc 10mg (100% NRV), Nicotinamide 16mg NE (100% NRV), Vitamin B6 2.8mg (200% NRV), Vitamin D3 5μg (200IU) (100% NRV), Vitamin B12 7.5μg (300% NRV).",
        size:"350g",
        brand:"CHU",
        sku:"a2",
        price:449,
        image:"https://i.postimg.cc/vHjxJHLh/chu-gummies-QTl-Ij7-Xt-U4-unsplash.jpg"
      }
    })
    let p3 = Product.findOrCreate({
      where: {
        name:"Crema de maní",
        description:"La pasta hecha a base de maní es un alimento innovador para que lo incorpores a tu alimentación. Para un desayuno o merienda nutritiva o para complementar tus recetas con energía. Hecha 100% con maní tostado, sin aditivos.",
        ingredients:"Maní, manteca vegetal, endulzantes naturales.",
        size:"400g",
        brand:"Maní King",
        sku:"a3",
        price:250,
        image:"https://i.postimg.cc/VvfXkGdF/corleto-peanut-butter-u256-Gz-Fi7-Gw-unsplash.jpg"
      }
    })
    let p4 = Product.findOrCreate({
      where: {
        name:"Granola",
        description:"Esta granola es un alimento especialmente pensado para los desayunos, aporta fibra, es energético y va fantásticamente bien con yogurt y algo de fruta.",
        ingredients:"Copos de avena, azucar moreno, canela molida, avellanas, miel, aceite de girasol, esencia de vainilla.",
        size:"250g",
        brand:"Producteca de Edgar",
        sku:"a4",
        price:199,
        image:"https://i.postimg.cc/nrgNJDLp/fallon-michael-d1-K4-Gfap-Ek-unsplash.jpg"
      }
    })
    let p5 = Product.findOrCreate({
      where: {
        name:"Salsa sabor queso a base de cajú",
        description:"La salsa de queso a base de cajú no tiene colesterol y es más ligera y baja en grasa que una salsa de queso clásica.",
        ingredients:"Castañas de cajú, jugo de limón, levadura de cerveza, sal, leche vegetal, agua.",
        size:"200g",
        brand:"Core & Rind",
        sku:"a5",
        price:499,
        image:"https://i.postimg.cc/Tw9WFVC5/hearted-co-2ld7b23-VTDw-unsplash.jpg"
      }
    })
    let p6 = Product.findOrCreate({
      where: {
        name:"Hamburguesa vegana",
        description:"Las hamburguesas veganas son una forma excelente de incorporar más legumbres en nuestra alimentación, especialmente para niños o personas a las que no les gusten mucho.",
        ingredients:"Nueces, habas, salsa de soja, tomate, lechuga, cebolla, lentejas.",
        size:"400g",
        brand:"Not a Burger",
        sku:"a6",
        price:699,
        image:"https://i.postimg.cc/Wb4MRyRN/lefteris-kallergis-TLKIVSW6-Do-unsplash.jpg"
      }
    })
    let p7 = Product.findOrCreate({
      where: {
        name:"Harina premezcla (sin TACC)",
        description:"La harina premezcla no contiene gluten y está compuesta por varios tipos de harinas.",
        ingredients:"Harina de maiz, harina de soja, harina de papa, fécula de mandioca y almidón de maíz.",
        size:"1000g",
        brand:"El molino de Santiago",
        sku:"a7",
        price:200,
        image:"https://i.postimg.cc/4dZ9WLbT/olga-kudriavtseva-xw8ptt-N8-MBg-unsplash.jpg"
      }
    })
    let p8 = Product.findOrCreate({
      where: {
        name:"Pizza vegana",
        description:"Es una pizza 100% casera, vegana, sin gluten, baja en grasa y con su queso vegano incluido. ¡Es la pizza perfecta!",
        ingredients:"Harina sin gluten, tomate concentrado, mozzarella vegana, champiñones, cebolla morada, tomates cherry, albahaca.",
        size:"650g",
        brand:"El horno de Sergio",
        sku:"a8",
        price:450,
        image:"https://i.postimg.cc/wxwmkk1S/likemeat-Cb-NAux-SZTFo-unsplash.jpg"
      }
    })
    let p9 = Product.findOrCreate({
      where: {
        name:"Habas tostadas saborizadas Pulsítos",
        description:"Nuestras fabulosas habas fueron cosechadas y tostadas en Gran Bretaña y sazonadas en Barcelona para conseguir su famoso sabor mediterraneo.",
        ingredients:"Habas, saborizantes naturales.",
        size:"100g",
        brand:"Pulsítos",
        sku:"a9",
        price:75,
        image:"https://i.postimg.cc/RZ6KhnV2/pulsitos-com-z-0peds-Rxps-unsplash.jpg"
      }
    })
    let p10 = Product.findOrCreate({
      where: {
        name:"Maní tostado (sin TACC)",
        description:"El maní para los deportistas. Perfecto para aquellos que apuntan a llevar una vida sana, al aire libre, en contacto permanente con la naturaleza.",
        ingredients:"Maní, sal, conservantes naturales.",
        size:"50g",
        brand:"Manicería Altas Cumbres",
        sku:"a10",
        price:49,
        image:"https://i.postimg.cc/zfThSZhj/sketch-8-Lbcv-CZnmyw-unsplash.jpg"
      }
    })
    let p11 = Product.findOrCreate({
        where: {
        name:"Barrita de arroz sabor chocolate negro Crowie",
        description: "Barra de cereales bañada en chocolate. Presentación: 12g.",
        ingredients: "Arroz, semillas de amaranto, semillas de sésamo, chía.",
        price: 41,
        sku:"a11",
        size: "48 g",
        brand:"Crowie",
        image:"https://i.postimg.cc/TwRB0bYw/choco-negro1-d60b8debcc5af1302615510487738179-640-01-0944a331959ac7d19415813782701700-1024-1024.jpg"
    }
    })
  let p12 = Product.findOrCreate({
      where: {
        name:"Alfajor De Almendras Nativo - Dulce De Leche - 60g",
        description:"Te presentamos el snack saludable ideal que estás buscando: ¡Delicioso alfajor integral con dulce de leche! No tiene harina blanca, grasas trans, colesterol, conservantes, colorantes ni aditivos.",
        ingredients:"Dulce de leche, azucar mascabo, aceite de coco, harina integral, harina de almendras, huevos.",
        price:103,
        sku:"a12",
        size: "50 g",
        brand:"Nativo",
        image:"https://i.postimg.cc/G2qV5pHj/alfajor-nativos-dulce-de-leche11-d66b41928c3da5d7c315778961998660-1024-102411-fdce70190b5622c2981581.jpg"
        }
    })
  let p13 = Product.findOrCreate({
      where: {
        name:"Leche de castañas tostadas Vivet",
        description:"Alimento líquido a base de castañas sabor original. Libre de glutenm, sin azúcar agregada, sin TACC.",
        ingredients:"Castañas de cajú, agua, saborizantes y conservantes naturales.",
        price:183,
        sku:"a13",
        size: "1 l",
        brand:"Vivet",
        image:"https://i.postimg.cc/x88hDSmV/SsOyoqe.png"
    }
    })
  let p14 = Product.findOrCreate({
      where: {
        name:"Dulce de leche sin azúcar Beepure",
        description:"El mejor dulce de leche sin azúcar.Delicioso sabor y textura. Endulzada con sucralosa. Sin TACC. Presentación: Envase por 400 gr",
        ingredients:"Leche sin tenor graso, sulacrosa, conservantes naturales.",
        price:575,
        sku:"a14",
        size: "450 g",
        brand:"Beepure",
        image:"https://i.postimg.cc/Y0PVtyNG/beepure-ddl-sinazucar1-a2a204a4a0259c462d15496338282047-640-01-963915891db8bf612b15819780969854-1024.png"
    }
    })
  let p15 = Product.findOrCreate({
      where: {
        name:"Tostadita de arroz sabor queso Cereal Sol",
        description:"Galleta de arroz, tipo tostada, con una fórmula riquísima, destacada por su mayor sabor, crocancia y calidad.",
        ingredients:"Harina de arroz, saborizante vegetal de queso, conservantes naturales.",
        price:59,
        sku:"a15",
        size: "50 g",
        brand:"Cereal Sol",
        image:"https://i.postimg.cc/QxHGvcgK/snacks-arroz-queso-cereal-sol1-a07f579b8841f2460815517316211479-640-01-944396f554288fe36415819763277.jpg"
      }
    })
  let p16 = Product.findOrCreate({
      where: {
        name:"Chips de zanahoria Nuestros Sabores",
        description:"Absolutamente natural. Zanahoria Rurales SIN TACC, reducidas en sodio, 0% grasas trans, sin conservantes ni aditivos. size: 80g",
        ingredients:"Zanahoria, sal marina.",
        price:80,
        sku:"a16",
        size: "80 g",
        brand:"Nuestros Sabores",
        image:"https://i.postimg.cc/sx2djht8/diseno-sin-titulo1-655b00677c8fd6be7c15683189603526-640-01-03575fd6585b110ddf15814607856981-1024-102.png"
      }
    })
    let p17 = Product.findOrCreate({
      where: {
        name:"Harina integral orgánica Terra Sana",
        description:"Elaborada a partir de granos de trigo enteros que fueron cultivados evitando el uso de fertilizantes y agroquímicos, conservando intactas sus propiedades nutritivas. Molienda fina ideal para panadería y molienda extra fina especialmente indicada para repostería y preparaciones delicadas.",
        ingredients:"Harina de Trigo. Conservantes naturales.",
        price:245,
        sku:"a17",
        size: "1 kg",
        brand:"Terra Sana",
        image:"https://i.postimg.cc/4NqkGnwL/harina-integral-organica-fina-terra-sana-6-kg-d-nq-np-817432-mla32171074477-092019-f1-2898269610c99f.jpg"
      }
    })
    let p18 = Product.findOrCreate({
      where: {
        name:"Fusili multicereal con kale Wakas",
        description:"Wakas ofrece dentro de su línea de pastas multicereales con granos ancestrales sin tacc la clásica combinación de harina de arroz con harina de maíz para elaborar fideos con un gran valor nutricional sin conservantes, sin lactosa y sobre todo libres de gluten.",
        ingredients:"Harina de arroz, harina de maíz precocida, harina de kale.",
        price:103,
        sku:"a18",
        size: "560 g",
        brand:"Wakas",
        image:"https://i.postimg.cc/zDdYdxh1/fideos-multicereal-con-kale-sin-tacc-imagen11-6f2e12c55fbac55e4b15810810116019-1024-1024.jpg"
      }
    })
    let p19 = Product.findOrCreate({
      where: {
        name:"Aceite de coco neutro Chiagraal",
        description:"Este aceite de coco se llama 'neutro' porque no tiene gusto a coco y por eso es el más recomendable para cocinar. Se puede usar para sustituir a la manteca, margarina o cualquier otro aceite en tus recetas ya que se mantiene estable a altas temperaturas y no se oxida al calentarlo como sucede con los demás aceites vegetales que contienen omega 6. El 50% del contenido de grasa en el aceite de coco es una grasa difícil de encontrar, llamada ácido láurico, que posee propiedades únicas que promueven la salud. Animate a probarlo como cosmético natural hidratando tu piel, nutriendo tu cabello y descrubrí sus múltiples beneficios.",
        ingredients:"Aceite de coco refinado sin químicos.",
        price:440,
        sku:"a19",
        size: "180 g",
        brand:"Chiagraal",
        image:"https://i.postimg.cc/02L33F2h/958d91-e2a72f0429a246ad886600d85f0074e6-mv2-d-1459-2180-s-21-7d4b166ec18b8e083f15815108841277-1024-1.png"
      }
    })
    let p20 = Product.findOrCreate({
      where: {
        name: "Pasta de tomates secos Dell Isola",
         description:"Famiglia Dell'Isola utiliza materia prima de excelente calidad al igual que para sus aceites para ofrecernos esta pasta de tomates secos, a base de tomates deshidratados, un aderezo especial para agregar a tus recetas y entradas.",
        ingredients:"Pasta 100% de tomate natural.",
        price:405,
        sku:"a20",
        size: "180 g",
        brand:"Dell Isola",
        image:"https://i.postimg.cc/tJm0Ygbg/pasta-tomate-seco-dellisola-fitmarket1-0737e196d33c58228515665648589820-480-01-afd076e0bf0c9eec51158.jpg"
      }
    })
    let p21 = Product.findOrCreate({
      where: {
        name:"Té matcha en polvo Organikal Superalimentos",
        description:"Esta variedad de té de origen asiático se caracteriza por su delicado gusto, pero sus inigualables características nutricionales junto a sus propiedades antioxidantes y desintoxicantes.",
        ingredients:"Té matcha certificado.",
        price:720,
        sku:"a21",
        size: "50 g",
        brand:"Organikal Superalimentos",
        image:"https://i.postimg.cc/q7c92wrS/te-matcha-en-polvo-imagen11-c7f32a27027b58887715816250023206-1024-1024.jpg"
      }
    })
    let p22 = Product.findOrCreate({
      where: {
        name:"Sal rosa del Himalaya Life",
        description:"La Sal del Himalaya es conocida como “oro rosa”. Su color pincelado de rosa prueba su contenido en hierro e identifica su procedencia: las profundas capas alimentadas por las infiltraciones minerales del magma. Junto con el agua pura de manantial, la sal del Himalaya ofrece todos los elementos naturales exactamente idénticos a los elementos en nuestro cuerpo.",
        ingredients:"Sal fortificada con calcio, potasio, magnesio, óxido de sulfuro, hierro, manganeso, flúor, yodo, cinc y cromo.",
        price:435,
        sku:"a22",
        size: "150 g",
        brand:"Life",
        image:"https://i.postimg.cc/L8Pd8RbH/sal-11-99cf06b6ddd6078d3d15820621132955-1024-1024.jpg"
      }
    })
    let p23 = Product.findOrCreate({
      where: {
        name:"Jugo de chía sabor naranja Chiagraal",
        description:"Jugo de Naranja y Frutilla con Semillas de Chia. 100% Vegano & Gluten Free. Snack on the GO! Bebida Rica y nutritiva.",
        ingredients:"Agua filtrada, frutilla, semilla de chia, jugo de naranja, fructosa.",
        price:180,
        sku:"a23",
        size: "250 ml",
        brand:"Chiagraal",
        image:"https://i.postimg.cc/yYJtLsBF/958d91-7a492d203f49470fa7b1f81cbfa7162d-mv2-d-1459-2763-s-21-1377f4e81d14406e0215814611431018-1024-1.png"
      }
    })
    let p24 = Product.findOrCreate({
      where: {
        name:"Aceite de oliva orgánica extra virgen Terra Sana",
        description:"Elaborado a partir de olivas seleccionadas en forma manual, que se cultivan en un ambiente ecológico, libre de fertilizantes artificiales, herbicidas e insecticidas químicos, cumpliendo estrictamente las pautas de certificación orgánica.",
        ingredients:"Olivas orgánicas sin químicos.",
        size:"500 ml",
        brand:"Terra Sana",
        sku:"a24",
        price:810,
        image:"https://i.postimg.cc/MGJCc4C1/aceite-de-oliva-extra-virgen-organica-500-ml-terrasana1-f2ba91b07dfaa3919315827203220038-1024-1024.jpg"
      }
    })


    Promise.all([
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24
    ]).then(() => {
      console.log('Productos cargados');
    });
  });

});


