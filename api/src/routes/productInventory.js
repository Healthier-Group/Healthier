const router = require("express").Router();
const express = require("express");

const addInventory = require("../controllers/inventory/addInventoryController");
const putInventory = require("../controllers/inventory/updateInventoryController");
const getAllInventory = require("../controllers/inventory/getInventoryController");
const getInventoryById = require("../controllers/inventory/getInventoryByIdController");

router.use(express.json());

router.get("/getAll", getAllInventory); // Check get route
router.get("/getInventory/:id'", getInventoryById);
router.post("/addInventory", addInventory);
router.put("/updateInventory/:id", putInventory);

module.exports = router;
