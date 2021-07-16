const router = require("express").Router();
const express = require("express");

const addCategory = require("../controllers/category/addCategoryController");
const putCategory = require("../controllers/category/updateCategoryController");
const deleteCategory = require("../controllers/category/deleteCategoryController");
const getAllCategory = require("../controllers/category/getCategoryController");
const getCategoryById = require("../controllers/category/getCategoryByIdController");

router.use(express.json());

router.get("/", getAllCategory); // Check get route
router.get("/:id'", getCategoryById);
router.post("/", addCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
