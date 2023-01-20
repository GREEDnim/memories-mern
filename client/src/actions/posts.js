
import * as api from '../api';
import {CREATE,UPDATE,DELETE,FETCH_ALL} from '../constants/ActionTypes'
//action creators

// this is what an actioncreator should look like .
// const getPosts=()=>{
//     const action={type:'FETCH_ALL',payload:[]}
//     return action;
// }

// but since we are fetch data , takes time , the function that called this action might not wait for its result and then continue its execution.
// so we have to make it async and awaited. this is achieved using thunks.
//     instead of returning an action we'll call the dispatch.

export const getPosts=()=>async(dispatch)=>{
    try {
        //   console.log("in action")
        const response=await api.fetchPosts();
        // console.log(response);
        //the data fetched using axios are in data property
        const action={type:FETCH_ALL,payload:response.data};
        // console.log("fetcheda");
        dispatch(action)

    } catch (error) {
        console.log(error)
    }
    

}

export const createPost=(post)=>async(dispatch)=>{
    try {
        // console.log(post)
        const response=await api.createPosts(post);
        // console.log(response);
        // console.log("action worked in fetching");
        dispatch({type:CREATE,payload:response.data})
    } catch (error) {
        console.log(error);
    }
}


export const updatePost=(id,post)=>async (dispatch)=>
{
    try {
        const {data}=await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost=(id)=>async (dispatch)=>{

    try {
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id});
    } catch (error) {
        console.log(error.message);
    }
}
export const likePost=(id)=>async(dispatch)=>{
    try {
        // console.log(id);
       const {data}= await api.likePost(id);

       dispatch({type:UPDATE,payload:data});
    } catch (error) {
        console.log(error);
    }
}