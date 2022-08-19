import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data)=>{
        const res = await axios.post("http://localhost:7000/auth/signin",data);
        return res.data;
    }
)

export const signupUser = createAsyncThunk(
    "user/signupUser",
    async (data)=>{
        const res = await axios.post("http://localhost:7000/auth/signup",data);
        return res.data;
    }
)

export const forgotPassword = createAsyncThunk(
    "user/forgotPassword",
    async (data)=>{
        const res = await axios.get("http:localhost:7000/auth/forgotpassword",data);
        return res.data;
    }
)

export const resetPassword = createAsyncThunk(
    "user/resetPassword",
    async (data)=>{
        const res = await axios.post("http:localhost:7000/auth/resetpassword",data);
        return res.data;
    }
)


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{},
        status:null,
        newuser:null,
    },
    reducers:{
        logout(state,action){
            state.status="failed";
            localStorage.removeItem("user");
            localStorage.removeItem("status");

        }
    },
    extraReducers:{
        [loginUser.pending]:(state,action) => {
            state.status="loading";
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.status="success";
            state.user=action.payload;
            localStorage.setItem("user",action.payload.empName);
            localStorage.setItem("status",true);
        }, 
        [loginUser.rejected]:(state,action)=>{
            state.status="failed"
        },
        [signupUser.fulfilled]:(state,action)=>{
            state.newuser="true";
        }, 
    }
    
})

export const GetUser=(state) => state.user.user;
export const {logout}=userSlice.actions;
// console.log(GetUser);
export const UserStatus=(state) => state.status;
// console.log(UserStatus);

export default userSlice.reducer;