const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authroute = require("./routes/auth");
const productroute = require("./routes/product");
const cartroute = require("./routes/cart");
const orderroute = require("./routes/order");
const striperoute = require("./routes/stripe");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successfull"))
.catch((err) => {console.log(err);});

app.use(express.json());
app.use("/api/auth", authroute);
app.use("/api/users", userRoute);
app.use("/api/products", productroute);
app.use("/api/cart", cartroute);
app.use("/api/orders", orderroute);
app.use("/api/checkout", striperoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running")
})