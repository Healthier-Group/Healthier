const router = require("express").Router();
const express = require("express");

const addOrderProduct = require ("../controllers/orderProducts/addOrderProductsController");
const getOrderProductsById = require ("../controllers/orderProducts/getOrderProductByIdController");
const getOrderProducts = require ("../controllers/orderProducts/getOrderProductsController");
const putOrderProduct = require ("../controllers/orderProducts/putOrderProductsController");
const deleteOrderProduct = require ("../controllers/orderProducts/deleteOrderProductsController");

router.use(express.json())

router.post("/addOrderProduct", addOrderProduct);
router.get("/getOrderProduct/:id", getOrderProductsById);
router.get("/getOrderProducts", getOrderProducts);
router.put("/updateOrderProduct/:id", putOrderProduct);
router.delete("/deleteOrderProduct/:id", deleteOrderProduct);

module.exports = router;