const express=require('express');
const mongoose=require('mongoose')
const cityRoutes=require('./routes/cityRoutes')
require('dotenv').config();
const cors=require('cors')
const app=express()
app.use(cors({
    origin:'*',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization']
}))

// middleware
app.use(express.json())

app.use('/api',cityRoutes)
const URI=process.env.MONGO_URI

// connection with mongoose
mongoose.connect(URI)
.then(()=>console.log('connected to mongoDB'))
.catch((error)=>console.log('error connecting :', error.message))

const PORT=process.env.PORT||3005;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}/}`)
})