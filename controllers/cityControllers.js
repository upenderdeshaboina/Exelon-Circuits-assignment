const City=require('../models/city')


// add city api
exports.addCity=async(req,res)=>{
    // const {name,population,country,latitude,longitude}=req.body
    // console.log(req.body)
    try{
        const city=new City(req.body);
        await city.save();
        res.status(201).json({
            message:'City added successfully',
            city
        })
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

// update city api
exports.updateCity=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try {
        const city=await City.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!city){
            return res.status(404).json({message:'City not found'})
        }
        res.staus(200).json({message:'city updated successfully',city})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// delete city api
exports.deleteCity=async (req,res)=>{
    try {
        const city=await City.findByIdAndDelete(req.params.id);
        if(!city){
            return res.status(404).json({message:'city not found'})
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// get cities api
exports.getCities=async(req,res)=>{
    try {
        const {page=1,limit=10,...filters}=req.query
        const cities=await City.find(filters)
            .limit(limit*1)
            .skip((page-1)*limit)
            .exec()
        const count=await City.countDocuments(filters)
        res.json({
            cities,totalPages:Math.ceil(count/limit),currentPage:page
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}