const router = require("express").Router();
const express = require("express");

const addOrder = require ("../controllers/order/addOrderController");
const getOrderById = require ("../controllers/order/getOrderByIdController");
const getOrders = require ("../controllers/order/getOrderController");
const putOrder = require ("../controllers/order/putOrderController");
const deleteOrder = require ("../controllers/order/deleteOrderController");
const getOrderByUser = require('../controllers/order/getOrderByUser');

router.use(express.json())

router.post("/addOrder", addOrder);
router.get("/getOrder/:id", getOrderById);
router.get("/getOrders", getOrders);
router.put("/updateOrder/:id", putOrder);
router.delete("/deleteOrder/:id", deleteOrder);
router.get('/getOrderByUser/:id', getOrderByUser);

module.exports = router;