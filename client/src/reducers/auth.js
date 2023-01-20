import { LOGIN,LOGOUT } from "../constants/ActionTypes";

export default function auth(state={authData:null},action)
{

switch (action.type) {
    case LOGIN:
        //  console.log({...action.payload});
        localStorage.setItem('profile',JSON.stringify(action.payload));
        return {...state,authData:action.payload};

    case LOGOUT:
        localStorage.clear();
        return {...state,authData:null};
    default:
        return state;
        
}
}