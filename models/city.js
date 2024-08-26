const mongoose=require('mongoose')
const {v4:uuid}=require('uuid')
const citySchema=new mongoose.Schema({
    _id:{type:String,default:uuid},
    name:{type:String,unique:true,required:true},
    population:{type:Number,required:true},
    country:{type:String,required:true},
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true}
})

const City=mongoose.model('City',citySchema)
module.exports=City;