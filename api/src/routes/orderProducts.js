const router = require("express").Router();
const express = require("express");

const addOrderProducts = require ("../controllers/orderProducts/addOrderProducts");
const getOrderProducts = require ("../controllers/orderProducts/getOrderProducts");
const putOrderProducts = require ("../controllers/orderProducts/putOrderProducts");
const deleteOrderProducts = require ("../controllers/orderProducts/deleteOrderProducts");

router.use(express.json())

router.post("/", addOrderProducts);
router.get("/", getOrderProducts);
router.put("/:id", putOrderProducts);
router.delete("/:id", deleteOrderProducts);

module.exports = router;