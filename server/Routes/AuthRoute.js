import express from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

//import Model
import { EmployeeModel } from '../Models/Employee';
import { CounterModel } from '../Models/Counter';
import { sendPasswordReset, sendWelcome } from '../Utils/email';

const Router = express.Router();

Router.post('/signup',async (req, res) => {
    try {
        const isnewUser = await EmployeeModel.findOne({email:req.body.email});
        if(isnewUser)
            throw new Error("User already Exists with this email");
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        CounterModel.findOneAndUpdate(
            { id: "autoseq" },
            { "$inc": { "seqval": 1 } },
            { new: true }, async(err, value) => {
                let valueid;
                if (value == null) {
                    const newSeqval = CounterModel.create({ id: "autoseq" , seqval:10001})
                    valueid=10001;
                }
                else{
                    valueid=value.seqval;
                }
                const EmployeeDetails = req.body;
                EmployeeDetails.EmpId=valueid;
                EmployeeDetails.password=hashedPassword;
                const newEmp = await EmployeeModel.create(EmployeeDetails);
                // sendWelcome(EmployeeDetails.Email)
                return res.status(200).json(newEmp);
            }
            )
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
})

Router.get('/signin',async(req,res)=>{
    try{
        const email=req.body.email;
        const User = await EmployeeModel.findOne({email:email})
        if(!User)   
            throw new Error("user not found with this email")
        console.log(User);
        const isvalidPassword =await bcrypt.compare(req.body.password,User.password)
        if(!isvalidPassword)
            throw new Error("The password is wrong")
        console.log("the value of valid password is",isvalidPassword);
        return res.status(200).json(User)
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
})

Router.post('/forgotpassword',async(req,res)=>{
    try{
        const email=req.body.email;
        const User = await EmployeeModel.findOne({email:email})
        if(!User)   
            throw new Error("user not found with this email")
        console.log(User);
        const randomBytes =crypto.randomBytes(32);
        const token=randomBytes.toString("hex");
        console.log("the random token is ", token);
        // sendPasswordReset(email,token)
        const updateUser = await EmployeeModel.findOneAndUpdate({email:email},{resetToken:token,tokenExpiry:Date.now()+3600000},{new:true});
        return res.status(200).json({message: "the reset email sent successfully"});
    }
    catch(err){
        return res.status(500).json({error:err.message});
    }
})

Router.post("/resetpassword/:token",async(req,res)=>{
    try{
        const headerToken = req.params.token;
        const UserWithValidToken = await EmployeeModel.findOne({
            resetToken:headerToken,
            tokenExpiry:{$gt:Date.now()}
        })
        if(!UserWithValidToken)
            throw new Error("The token has been expired");
        const hashedPassword = await bcrypt.hash(req.body.resetPassword,10);
        const updatePassword = await EmployeeModel.findOneAndUpdate({resetToken:headerToken},{password:hashedPassword},{new:true})
        return res.status(200).json({updatePassword,Message:"password has been updated"})
    }
    catch(err){
        return res.status(500).json({error:err.message});
    }
})




export default Router;