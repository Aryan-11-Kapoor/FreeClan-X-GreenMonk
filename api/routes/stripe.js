const router = require("express").Router();
const stripe = require("stripe")("sk_test_51LX1yPSFKASpHsrpJ0b72GbbzXlQqSJvWgCwNyqVrigvDhsQxD2TzXFFPVLJc5VoIGAj4vc2FgqX9giWE4wJDm5V00tJmfP2Wl")
router.post("/payment",(req,res)=>{
    stripe.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd"
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes);
        }
    });
});

module.exports = router;