import {createSlice} from "@reduxjs/toolkit";
const regSlice = createSlice({
    name:"username",
    initialState:{
        newUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        registerStart:(state)=>{
            state.isFetching=true;
        },
        registerSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        registerFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
    }
});

export const {registerStart, registerSuccess, registerFailure} = regSlice.actions;

export default regSlice.reducer;