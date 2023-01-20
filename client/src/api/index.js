import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req)=>{

    if(localStorage.getItem('profile')!==null)
    {
        req.headers.user=localStorage.getItem('profile');
    }
  
    return req;
})

export const fetchPosts=()=>{
    return API.get('/posts');
}
export const createPosts=(newPosts)=>{
    return API.post('/posts',newPosts);
}

export const updatePost=(id,updatedPost)=>{
    return API.patch(`/posts/${id}`,updatedPost);
}
export const deletePost=(id)=>{
    return API.delete(`/posts/${id}`);
}

export const likePost=(id)=>{
    return API.patch(`/posts/${id}/likePost`,likePost);
}

