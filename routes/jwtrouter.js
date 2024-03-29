const express=require('express');
const Router=express.Router();
const {login,dashboard}=require('../controllers/routercontrollers')
const auth=require('../middleware/authentication');


Router.route('/login').post(login);

Router.route('/dashboard').get(auth,dashboard);

module.exports=Router;