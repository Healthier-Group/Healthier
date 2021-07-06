const router = require("express").Router();
const express = require("express");

const addProduct = require("../controllers/products/addProductsController");
const putProduct = require("../controllers/products/putProductsController");
const deleteProduct = require("../controllers/products/deleteProductsController");
const getAllProducts = require("../controllers/products/getProductController");
const getProductById = require("../controllers/users/getUserByIdController");

router.use(express.json());

router.get("/getAll", getAllProducts); // Check get route
router.get("/getProduct/:id'", getProductById);
router.post("/addProduct", addProduct);
router.put("/updateProduct/:id", putProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
