const router = require("express").Router();


const order= require("../models/Order");
const{verifytoken, verifytokenandauth, verifytokenandadmin} = require("./verifytoken");


//CReate
router.post("/",verifytoken, async (req,res)=>{
    const neworder = new order(req.body);
    try{
        const savedorder = await neworder.save();
        res.status(200).json(savedorder);

    }catch(err){
        res.status(500).json(err);
    }
});






 router.put("/:id", verifytokenandadmin, async (req,res)=>{
   
   
   try{
    const updatedorder = await  order.findByIdAndUpdate(
        req.params.id, 
        {
        $set:req.body,
        },
        {new:true}
    );
    res.status(200).json(updatedorder);
   } catch(err){
    res.status(500).json(err);
}
});


//Delete
router.delete("/:id", verifytokenandadmin, async (req,res)=>{
    try{
        await OverconstrainedError.findByIdAndDelete(req.params.id)
        res.status(200).json("product deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET Product
router.get("/find/:userId",verifytokenandauth, async (req,res)=>{
    try{
        const orders = await order.find({userId: req.params.userId})
        

        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL PRODUCT
router.get("/",verifytokenandadmin, async (req,res)=>{
    try{
        const orders = await orders.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET MONTHLU INCOME
router.get("/income",verifytokenandadmin, async (req,res)=>{
    const date = new Date();
    const lastmonth = new Date(date.setMonth(date.getMonth()-1))
    const prevmonth = new Date(new Date().setMonth(lastmonth.getMonth()-1))
try{
    const income = await order.aggregate([
         {
            $match:{createdAt:{$gte: prevmonth}}},
            {
                $project:{
                month:{$month:"$createdAt"},
                sales:"$amount",
            },
        },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"},
                },
            },
         
    ]);
    res.status(200).json(income);
}catch(err){
    res.status(500).json(err)
}

});

module.exports = router;

