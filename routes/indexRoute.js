const express=require('express')

const route= express.Router();

const indexController=require('../controller/indexController')

const authMiddleware=require('../middleware/Auth')

route.use(authMiddleware.auth)
route.get('/index',indexController.index);
route.get('/home',indexController.home);

module.exports=route;