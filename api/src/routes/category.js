const router = require("express").Router();
const express = require("express");

const addCategory = require("../controllers/category/addCategoryController");
const putCategory = require("../controllers/category/updateCategoryController");
const deleteCategory = require("../controllers/category/deleteCategoryController");
const getAllCategory = require("../controllers/category/getCategoryController");
const getCategoryById = require("../controllers/category/getCategoryByIdController");

router.use(express.json());

router.get("/getAll", getAllCategory); // Check get route
router.get("/getCategory/:id'", getCategoryById);
router.post("/addCategory", addCategory);
router.put("/updateCategory/:id", putCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
