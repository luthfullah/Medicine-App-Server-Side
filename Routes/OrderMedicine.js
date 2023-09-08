const express = require('express')
const router = express.Router()
const Order = require('../model/Order')
 router.get('/', async(req, res)=>{
    let userorder;
    try {
        userorder = await Order.find();
    } catch (error) {
        console.log(error);
    }
    if (!userorder) {
        return res.status(404).json({message: "empty address.."})
    } else {
        return res.status(200).json({userorder})

    }

 })
 router.post('/', async(req,res)=>{
    const {username, address, email,phone}=req.body;
    let userorder;
    try {
        userorder = new Order({
            username,
            address,
            email,
            phone
        })
      await  userorder.save();
    } catch (error) {
        console.log(error);
    }
    
    if(!userorder){
        return res.status(404).json({massage:"No order placed..."})
    }else{
        return res.status(200).json({userorder})

    }

 })

module.exports = router;



