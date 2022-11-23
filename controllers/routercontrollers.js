const jwt=require('jsonwebtoken');

const login=async(req,res)=>{
    const{username,password}=req.body;
    if(!username || !password){
        res.status(400).send({msg:'Please provide email and password'});
    }
    const id=new Date().getDate(); //for reference we are taking date as id in realtime i will use id from database
    
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'60d'});

    res.status(200).json({msg:'user created',token});
}
const dashboard=(req,res)=>{
    const num=Math.floor(Math.random()*100);
    res.status(200).send({msg:`Hello ${req.user.username}`,secret:`your lucky number is ${num}`});
}
module.exports={login,dashboard};