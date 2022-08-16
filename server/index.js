//import statements
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
require("dotenv").config();


//initializing the app with express
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

const Port=process.env.PORT || 7000
app.listen(Port,()=>{
    console.log("server is running at the port")
})