const mongoose = require('mongoose')

const CartSchema = mongoose.Schema;


const CartMedicineSchema= new CartSchema({

//Id for cartmedicine
id:{
    type: String
},
// write the fields name here
name:{
    type:String,
    required:true
}, 
description:{
    type: String,
    required: true
}, 
price:{
    type: Number,
    required: true
},
image:{
    type: String,
    required: true
}

})
module.exports = mongoose.model("CartMedicine", CartMedicineSchema)
