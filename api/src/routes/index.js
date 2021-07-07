const { Router } = require("express");

const users = require("./users");
const admin = require("./admin");
const products = require("./products");
const review = require("./reviews");
const inventory = require("./productInventory");
const category = require("./category");

const router = Router();

router.get("/unauthorized", (req, res) => {
  res.json("No authorization");
});

router.use("/users", users);
router.use("/admin", admin);
router.use("/products", products);
router.use("/review", review);
router.use("/inventory", inventory);
router.use("/category", category);

module.exports = router;
