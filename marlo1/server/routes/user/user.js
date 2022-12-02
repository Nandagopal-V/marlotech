const express = require('express')
const router = express.Router()
const { request } = require('express');
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config()
const userController=require('../../controller/usercontroller')
const verifytoken=require('../../congifuration/authorization')










//...........user login....................
router.post('/login',userController.dologin)

//...........user signup.....................
router.post('/signup',userController.dosignup)





module.exports = router
