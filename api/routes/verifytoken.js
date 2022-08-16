const jwt = require("jsonwebtoken");



const verifytoken = (req,res,next)=>{
    const authheader = req.headers.token;
    if(authheader){
        const token = authheader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err,user)=>{
        if(err) res.status(403).json("Token is not valid");
        req.user = user;
        next();
    });
    }else{
        return res.status(401).json("You are not authenticated");
    }

};

const verifytokenandauth = (req,res,next)=>{
    verifytoken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
        next();
        }else{
            res.status(403).json("Not allowed");
        }
    });
};

const verifytokenandadmin = (req,res,next)=>{
    verifytoken(req,res,()=>{
        if(req.user.isAdmin === req.params.id || req.user.isAdmin){
        next();
        }else{
            res.status(403).json("Not allowed");
        }
    });
};
module.exports = {verifytoken, verifytokenandauth, verifytokenandadmin};