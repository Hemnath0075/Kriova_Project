//import statements
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
require("dotenv").config();


import Authroute from './Routes/AuthRoute';

//initializing the app with express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

app.use("/auth",Authroute)




const Port=process.env.PORT || 7000
app.listen(Port,()=>{
    console.log("server is running at the ",Port);
})