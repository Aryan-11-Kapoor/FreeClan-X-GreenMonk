import { publicRequest } from "../requestmethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { registerFailure, registerStart, registerSuccess } from "./regslice"
export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure())
    }
}

export const register = async(dispatch,newuser)=>{
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",newuser)
        dispatch(registerSuccess(res.data));
    }catch(err){
        dispatch(registerFailure())
    }
}