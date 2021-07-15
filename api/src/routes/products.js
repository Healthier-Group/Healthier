const router = require("express").Router();
const express = require("express");

const addProduct = require("../controllers/products/addProductController");
const putProduct = require("../controllers/products/updateProductController");
const deleteProduct = require("../controllers/products/deleteProductController");
const updateProduct = require("../controllers/products/updateProductController");
const getAllProducts = require("../controllers/products/getProductController");
const getProductById = require("../controllers/products/getProductByIdController");

router.use(express.json());
//SIEMPRE AGREGAR CON COMILLAS SIMPLES
router.get('/', getAllProducts); // Check get route
router.get('/:id', getProductById);
router.post('/', addProduct);
//router.put('/:id', putProduct);
router.delete('/:id', deleteProduct); // JM  esto lo rompio ed y cia. 
router.put('/:id', updateProduct); 

module.exports = router;
