import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (dispatch,getState)=>{
        const res = await axios.get("http:localhost:7000/auth/login");
        return res.data;
    }
)


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{},
        status:null
    },
    extraReducers:{
        [loginUser.pending]:(state,action) => {
            state.status="loading";
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.status="success";
            state.user=action.payload;
        }, 
        [loginUser.rejected]:(state,action)=>{
            state.status="failed"
        }
    }
    
})

export const GetUser=(state) => state.user;

export default userSlice.reducer;