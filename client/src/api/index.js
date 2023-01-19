import axios from 'axios';
const url='http://localhost:5000/posts';

export const fetchPosts=()=>
{
    // console.log("api to fetch called");
    return axios.get(url);
}
export const createPosts=(newPosts)=>
{
    // console.log(newPosts+"  "+"shittt");

    return axios.post(url,newPosts);
}

export const updatePost=(id,updatedPost)=>
{

    return axios.patch(`${url}/${id}`,updatedPost);
}
export const deletePost=(id)=>{
    return axios.delete(`${url}/${id}`);
}

export const likePost=(id)=>{
    return axios.patch(`${url}/${id}/likePost`,likePost);
}

