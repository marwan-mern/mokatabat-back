import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import dotenv from "dotenv"


import UsersRoute from './routes/UsersRoute.js';
import DepartsRoute from './routes/DepartsRoute.js';
import IncomesRoute from './routes/IncomesRoute.js';








const app = express();
dotenv.config()


app.use(bodyParser.json({limit:`30mb`,extended:true}));
app.use(bodyParser.urlencoded({limit:`30mb`,extended:true}));

app.use(cors());

//Routes

app.use(`/Users`,UsersRoute)
app.use(`/Departs`,DepartsRoute)
app.use(`/Incomes`,IncomesRoute)









const PORT = process.env.PORT || 6050;
mongoose.connect(process.env.CONNECTION_URL,)
.then(()=>{app.listen(PORT,()=>{console.log(`Server Runs On Port : ${PORT}`)})})
.catch((err)=>{ console.log(err.message)})   

