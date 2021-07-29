const {	Product, Category } = require('../../db');

const catProducts = async () => {
    try{
        const vegano = await Category.findByPk(1);
        const vegetariano = await Category.findByPk(2);
        const celiaco = await Category.findByPk(3);
        const light = await Category.findByPk(4);
        const jugo = await Category.findByPk(5)

        const frutosSecos = await Product.findByPk(1);
        const gomitasChu = await Product.findByPk(2);
        const cremaMani = await Product.findByPk(3);
        const granola = await Product.findByPk(4);
        const salsaCaju = await Product.findByPk(5);
        const hamburguesaVegana = await Product.findByPk(6);
        const harinaPreMezcla = await Product.findByPk(7);
        const pizzaVegana = await Product.findByPk(8);
        const habasTostadas = await Product.findByPk(9);
        const maniTostado = await Product.findByPk(10);
        const barritaCrowie = await Product.findByPk(11);
        const alfajorAlmendra = await Product.findByPk(12);
        const lecheCastañas = await Product.findByPk(13);
        const dulceDeLeche = await Product.findByPk(14);
        const tostadaArroz = await Product.findByPk(15);
        const chipsZanahoria = await Product.findByPk(16);
        const harinaIntegral = await Product.findByPk(17);
        const fusiliMulticereal = await Product.findByPk(18);
        const aceiteCoco = await Product.findByPk(19);
        const pastaTomateSeco = await Product.findByPk(20);
        const teMatcha = await Product.findByPk(21);
        const salRosaHimalaya = await Product.findByPk(22);
        const jugoChiaNaranja = await Product.findByPk(23);
        const aceiteOliva = await Product.findByPk(24);

        await frutosSecos.addCategories([1, 2, 3, 4]); 
        await gomitasChu.addCategories([3, 4]); 
        await cremaMani.addCategories([1, 2, 3]); 
        await granola.addCategories([1, 2, 3, 4]); 
        await salsaCaju.addCategories([1, 2]); 
        await hamburguesaVegana.addCategories([1, 2, 3]); 
        await harinaPreMezcla.addCategories([1, 2, 3]); 
        await pizzaVegana.addCategories([1, 2]); 
        await habasTostadas.addCategories([1, 2, 3, 4]); 
        await maniTostado.addCategories([1, 2, 3]); 
        await barritaCrowie.addCategories([1, 2, 4]); 
        await alfajorAlmendra.addCategories([2, 4]); 
        await lecheCastañas.addCategories([1, 2, 3]); 
        await dulceDeLeche.addCategories([2, 3, 4]); 
        await tostadaArroz.addCategories([1, 2]); 
        await chipsZanahoria.addCategories([1, 2, 3, 4]); 
        await harinaIntegral.addCategories([1, 2, 4]);
        await fusiliMulticereal.addCategories([1, 2, 4]); 
        await aceiteCoco.addCategories([1, 2, 3]); 
        await pastaTomateSeco.addCategories([1, 2, 3]); 
        await teMatcha.addCategories([1, 2, 3, 4]); 
        await salRosaHimalaya.addCategories([1, 2, 3, 4]);
        await jugoChiaNaranja.addCategories([1, 2, 3, 4, 5]); 
        await aceiteOliva.addCategories([1, 2, 3]); 
    }
    catch (error){
        console.log(error)
    }
}

module.exports = {
    catProducts
};