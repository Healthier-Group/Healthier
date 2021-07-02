const router = require('express').Router();
const express = require('express');

const getAll = require('../controllers/users/getAllUsersControllers');

router.use(express.json());

router.get('/getall/', getAll);

module.exports = router;