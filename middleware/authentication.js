const jwt=require('jsonwebtoken');

const auth=async(req,res,next)=>{
    const authheader=req.headers.authorization
    if(!authheader || !authheader.startsWith('Bearer ')){
        res.status(401).send({msg:'No token provided'});
    }
    const token=authheader.split(' ')[1];
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const{id,username}=decoded;
        req.user={id,username};
        next();
    } catch (error) {
        res.status(401).send({msg:'No authorization to access this route'});
    }
}
module.exports=auth;