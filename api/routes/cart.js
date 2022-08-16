const router = require("express").Router();


const cart= require("../models/Cart");
const{verifytoken, verifytokenandauth, verifytokenandadmin} = require("./verifytoken");


//CReate
router.post("/",verifytoken, async (req,res)=>{
    const newcart = new cart(req.body)
    try{
        const savedcart = await newcart.save();
        res.status(200).json(savedcart)

    }catch(err){
        res.status(500).json(err)
    }
});






 router.put("/:id", verifytokenandauth, async (req,res)=>{
   
   
   try{
    const updatedcart = await  cart.findByIdAndUpdate(
        req.params.id, 
        {
        $set:req.body,
        },
        {new:true}
    );
    res.status(200).json(updatedcart);
   } catch(err){
    res.status(500).json(err);
}
});


//Delete
router.delete("/:id", verifytokenandauth, async (req,res)=>{
    try{
        await cart.findByIdAndDelete(req.params.id)
        res.status(200).json("product deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET Product
router.get("/find/:userId",verifytokenandauth, async (req,res)=>{
    try{
        const cart = await cart.findOne({userId: req.params.userId})
        

        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
});

// //GET ALL PRODUCT
router.get("/",verifytokenandadmin, async (req,res)=>{
    try{
        const carts = await cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;

