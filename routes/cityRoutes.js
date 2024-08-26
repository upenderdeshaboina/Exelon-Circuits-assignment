const express=require('express');
const {addCity,updateCity,deleteCity,getCities}=require('../controllers/cityControllers')
const router=express.Router();

router.post('/cities',addCity)        // adding city
router.put('/cities/:id',updateCity)   // updating city
router.get('/cities',getCities)       // cities with pagination
router.delete('/cities/:id',deleteCity)   // deleting city

module.exports=router;