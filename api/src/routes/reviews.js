const router = require("express").Router();
const express = require("express");

const addReview = require("../controllers/Reviews/addReviewController");
const getAllReviews = require("../controllers/Reviews/getReviewController");

router.use(express.json());

router.get("/getAll", getAllReviews); // Check get route
router.post("/addReview", addReview);

module.exports = router;
