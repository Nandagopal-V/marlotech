const express= require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const userRoutes=require('../server/routes/user/user')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>{console.log('database connected');})

app.use(express.json())
app.use(cors())




app.use('/',userRoutes)

app.listen(4000,()=>console.log('backend server 4000 started'))
