import { LOGIN,LOGOUT } from "../constants/ActionTypes";

export const setGoogleUser=(data)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const removeGoogleUser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT});
    } catch (error) {
        console.log(error);
    }
}


