const router = require('express').Router();
const express = require('express');

const getAllUsers = require('../controllers/users/getAllUsersController');
const createUser = require('../controllers/users/createUserController');
const getUserById = require('../controllers/users/getUserByIdController');
const updateUser = require('../controllers/users/updateUserController');
const deleteUser = require('../controllers/users/deleteUserController');

router.use(express.json());

router.get('/getAll', getAllUsers);
router.get('/getUser/:id', getUserById);
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser);
router.post('/addUser', createUser);
module.exports = router;