const {	Category } = require('../../db');

const categoryMockUp = async () =>{
    try{
await Category.findOrCreate({
    where: {
      name: "Vegano",
      description: "Alimento apto para consumo vegano",
    },
  });
await Category.findOrCreate({
    where: {
      name: "Vegetariano",
      description: "Alimento apto para consumo vegetariano",
    },
  });
  await Category.findOrCreate({
    where: {
      name: "Celíaco",
      description: "Alimento sin TACC",
    },
  });
  await Category.findOrCreate({
    where: {
      name: "Light",
      description: "Alimento bajo en calorías",
    },
  });
  await Category.findOrCreate({
    where: {
      name: "Jugo",
      description: "Jugos",
    },
  })}catch(e){
      console.log(e)
  }}

  module.exports = {
    categoryMockUp
}