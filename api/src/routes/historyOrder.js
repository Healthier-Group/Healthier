const router = require("express").Router();
const express = require("express");

const addHistory = require ("../controllers/historyOrder/addHistoryOrder");
const getHistory = require ("../controllers/historyOrder/getHistoryOrderById");
const getHistories = require ("../controllers/historyOrder/getHistoryOrders");
const updateHistory = require ("../controllers/historyOrder/putHistoryOrder");
const deleteHistoryOrder = require ("../controllers/historyOrder/deleteHistoryOrder");

router.use(express.json());

router.post("/addHistory", addHistory);
router.get("/getHistory/:id", getHistory);
router.get("/getHistories", getHistories);
router.put("/updateHistory/:id", updateHistory);
router.delete("/deleteHistory/:id", deleteHistoryOrder);


module.exports = router;