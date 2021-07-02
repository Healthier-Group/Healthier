const router = require('express').Router();
const express = require('express');

const addAdmin = require('../controllers/admin/addAdminController');     
const putAdmin = require('../controllers/admin/putAdminController');     
const deleteAdmin = require('../controllers/admin/deleteAdminController');     

router.use(express.json());

router.post("/", addAdmin);
router.put("/:id", putAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;