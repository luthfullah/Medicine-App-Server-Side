const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema;


const OrderMedicineSchema= new OrderSchema({

// write the fields name here
username:{
    type:String,
    required:true
}, 
 address:{
    type: String,
    required: true
},
email:{
    type: String,
    required:true,
    unique: true, 
},
phone:{
    type: Number,
    required: true
}

})
module.exports = mongoose.model("OrderCartMedicine", OrderMedicineSchema)
