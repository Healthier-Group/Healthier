const router = require("express").Router();
const express = require("express");

const addPaymentDetail = require ("../controllers/paymentDetail/addPaymentDetail");
const getPaymentDetail = require ("../controllers/paymentDetail/getPaymentDetail");

router.use(express.json())

router.post("/", addPaymentDetail);
router.get("/", getPaymentDetail);

module.exports = router;