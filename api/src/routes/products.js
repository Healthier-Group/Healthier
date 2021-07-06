const router = require("express").Router();
const express = require("express");

const addProduct = require("../controllers/products/addProductController");
const putProduct = require("../controllers/products/updateProductController");
const deleteProduct = require("../controllers/products/deleteProductController");
const getAllProducts = require("../controllers/products/getProductController");
const getProductById = require("../controllers/products/getProductByIdController");

router.use(express.json());

router.get("/getAll", getAllProducts); // Check get route
router.get("/getProduct/:id'", getProductById);
router.post("/addProduct", addProduct);
router.put("/updateProduct/:id", putProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
