const router = require("express").Router();
const express = require("express");

const addOrderProduct = require ("../controllers/orderProduct/addOrderProduct");
const getOrderProduct = require ("../controllers/orderProduct/getOrderProduct");
const putOrderProduct = require ("../controllers/orderProduct/putOrderProduct");
const deleteOrderProduct = require ("../controllers/orderProduct/deleteOrderProduct");

router.use(express.json())

router.post("/", addOrderProduct);
router.get("/", getOrderProduct);
router.put("/:id", putOrderProduct);
router.delete("/:id", deleteOrderProduct);

module.exports = router;