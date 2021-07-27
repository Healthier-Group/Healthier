const { Router } = require("express");

const orderProduct = require('./orderProducts');
const order = require('./order');
const users = require("./users");
const products = require("./products");
const review = require("./reviews");
const inventory = require("./productInventory");
const category = require("./category");
const auth = require("./auth");
const mercadopago = require('./mercadopago');
const historyOrder = require('./historyOrder');

const router = Router();

router.get("/unauthorized", (req, res) => {
  res.json("No authorization");
});

router.use('/history', historyOrder);
router.use('/orderProduct', orderProduct);
router.use('/order', order);
router.use("/users", users);
router.use("/products", products);
router.use("/review", review);
router.use("/inventory", inventory);
router.use("/category", category);
router.use("/auth", auth)
router.use('/mercadopago', mercadopago);

module.exports = router;
