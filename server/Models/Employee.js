import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    EmpId:{
        type:Number,
        required:[true,"Id is not assigned"],
        maxlength:50
    },
    Email:{
        type:String,
        required:[true,"Email is Required"],
        maxlength:50
    },
    Password:{
        type:String,
    },
    ResetToken:{
        type:String
    },
    TokenExpiry:{
        type:Date,
    }
    // EmpName:{
    //     type:String,
    //     required:[true,"Name is Required"],
    //     maxlength:50
    // },
    // DOB:{
    //     type:Date,
    //     required:[true,"DOB is Required"]
    // },
    // Phno:{
    //     type:String,
    //     required:[true,"phoneNumber is required"]
    // },
    // Street:{
    //     type:String,
    //     required:[true,"street is required"]
    // },
    // City:{
    //     type:String,
    //     required:[true,"city is required"]
    // },
    // State:{
    //     type:String,
    //     required:[true,"State is required"]
    // },
    // Country:{
    //     type:String,
    //     required:[true,"Country is required"]
    // },
    // Pincode:{
    //     type:String,
    //     required:[true,"street is required"]
    // }
})

export const EmployeeModel = mongoose.model("EmployeeDetails", EmployeeSchema);