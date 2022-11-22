const notfound=(req,res)=>{
    res.status(400).send('Route doesnot exist');
}

module.exports=notfound;