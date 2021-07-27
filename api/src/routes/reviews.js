const router = require("express").Router();
const express = require("express");

const addReview = require("../controllers/Reviews/addReviewController");
const getAllReviews = require("../controllers/Reviews/getReviewController");
const getReviewById = require("../controllers/Reviews/getReviewByIdController");
const updateReview = require("../controllers/Reviews/updateReviewController");
const deleteReview = require("../controllers/Reviews/deleteReviewController");

router.use(express.json());

router.get("/", getAllReviews); // Check get route
router.get("/:id", getReviewById)
router.post("/", addReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview)

module.exports = router;
