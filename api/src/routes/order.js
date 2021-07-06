const router = require("express").Router();
const express = require("express");

const addOrder = require ("../controllers/order/addOrder");
const getOrder = require ("../controllers/order/getOrder");
const putOrder = require ("../controllers/order/putOrder");
const deleteOrder = require ("../controllers/order/deleteOrder");

router.use(express.json())

router.post("/", addOrder);
router.get("/", getOrder);
router.put("/:id", putOrder);
router.delete("/:id", deleteOrder);

module.exports = router;