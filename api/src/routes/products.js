const router = require("express").Router();
const express = require("express");

const addProducts = require("../controllers/products/addProductsController");
const putProducts = require("../controllers/products/putProductsController");
const deleteProducts = require("../controllers/products/deleteProductsController");
const getProducts = require("../controllers/products/getProductController");

router.use(express.json());

router.post("/", addProducts);
router.put("/:id", putProducts);
router.delete("/:id", deleteProducts);
router.get("/", getProducts); // Verificar la ruta para get

module.exports = router;
