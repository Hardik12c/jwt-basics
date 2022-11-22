const express=require('express');

const Router=express.Router();

Router.route('/login')
.post((req,res)=>{
    res.status(200).send('login router is working');
})

Router.route('/dashboard')
.get((req,res)=>{
    const num=Math.floor(Math.random()*100);
    res.status(200).send({msg:`your lucky number is ${num}`});
})

module.exports=Router;