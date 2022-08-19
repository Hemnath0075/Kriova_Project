import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    EmpId:{
        type:Number,
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        maxlength:50
    },
    password:{
        type:String,
    },
    resetToken:{
        type:String
    },
    tokenExpiry:{
        type:Date,
    },
    empName:{
        type:String,
        required:[true,"Name is Required"],
        maxlength:50
    },
    dob:{
        type:Date,
        required:[true,"DOB is Required"]
    },
    phno:{
        type:String,
        required:[true,"phoneNumber is required"]
    },
    street:{
        type:String,
        required:[true,"street is required"]
    },
    city:{
        type:String,
        required:[true,"city is required"]
    },
    state:{
        type:String,
        required:[true,"State is required"]
    },
    country:{
        type:String,
        required:[true,"Country is required"]
    },
    pincode:{
        type:String,
    }
})

export const EmployeeModel = mongoose.model("EmployeeDetails", EmployeeSchema);