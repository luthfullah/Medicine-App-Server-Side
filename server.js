
const express = require('express');
const mongoose = require('mongoose');
const router=require('./Routes/Medicine-routes')
const Cartrouter = require('./Routes/CartMedicine-routes')
const Orderrouter = require('./Routes/OrderMedicine')
const cors =require('cors');
const Users = require('./Routes/UserRoute')


const port=8000
const app = express();
app.use(express.json());
app.use(cors());


//middle ware
// localhost/medicine get all medicine
app.use('/medicine',router) 
app.use('/cartmedicine', Cartrouter)
app.use('/ordermedicine', Orderrouter)
app.use('/', Users)


// user enter un routed link
app.use((req,res)=>{
    res.status(404).json({error:"Url Not Found..."})
})


//database connectivity
mongoose.connect('mongodb+srv://admin:admin@cluster0.eckl6nq.mongodb.net/medicinesdb')
.then(console.log("connected"))
.then(()=> console.log("connected to database"))

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



