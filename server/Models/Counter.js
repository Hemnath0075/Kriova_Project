import mongoose from "mongoose";


const CounterSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    seqval:{
        type:Number,
        required:true
    }
})

export const CounterModel = mongoose.model("Counter", CounterSchema);