const express = require('express')
const router = express.Router();
const CartMedicine = require('../model/CartMedicine')


router.get('/', async (req, res)=>{
    let Cartmedi;
try{
Cartmedi = await CartMedicine.find();
}catch(err){
    console.log(err);
}

if(!Cartmedi){
    return res.status(404).json({message:"No cart Medicines Availible.."})
}
else{
    return res.status(200).json({ Cartmedi })
}

})

//get api for count
router.get('/count/', async (req, res)=>{
    let Cartmed;
try{
Cartmed = await CartMedicine.find().countDocuments();
}catch(err){
    console.log(err);
}

if(!Cartmed){
    return res.status(404).json({message:"No count"})
}
else{
    return res.status(200).json({ Cartmed })
}

})

//post api
router.post('/', async (req, res)=>{
    const {id,name, description, price, image}= req.body;
    let CartPostMedi;
    try {
        CartPostMedi = await CartMedicine({
           id, name, description, price, image
        })
        await CartPostMedi.save()
    } catch (error) {
        console.log(error);
    }
    if (!CartPostMedi) {
        return res.status(500).json({message: "no cart medicines are availiable"})
    } else {
        return res.status(201).json({CartPostMedi})
    }

})

router.delete('/:id', async (req, res)=>{
    const _id = req.params.id;
    let delCart;
    try {
        delCart = await CartMedicine.findByIdAndDelete(_id);
    } catch (error) {
       console.log(error); 
    }
if (!delCart) {
    return res.status().json({message: ' couldnot deleted the item'})
} else {
    return res.status(200).json({delCart})
}
})
module.exports = router;
