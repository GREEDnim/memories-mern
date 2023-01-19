import { LOGIN,LOGOUT } from "../constants/ActionTypes";

export default function auth(state={authData:null},action)
{

switch (action.type) {
    case LOGIN:
        //  console.log({...action.payload});
        return {...state,authData:action.payload};

    case LOGOUT:
        return {...state,authData:null};
    default:
        return state;
        
}
}