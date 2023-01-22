import React from "react";
import {useState,useEffect} from 'react';
import {  paper, form, fileInput, buttonSubmit } from './Formcss'
import { TextField,Button,Typography,Paper } from "@mui/material";
import FileBase from 'react-file-base64';

import { useDispatch,useSelector } from "react-redux";
import { createPost,updatePost } from "../../actions/posts";


function Form({currentId,setCurrentId})
{
    // console.log("form");
    const dispatch=useDispatch();
    const [postData,setPostData]=useState({
        title:'',message:'',tags:'',selectedFile:''});
    
    const post=useSelector((state)=>
    {
        console.log(state);
        return currentId?state.posts.posts.find( (post)=>post._id===currentId ):null
    });
    const user=JSON.parse(localStorage.getItem('profile'));
    
    useEffect( ()=>{
            if(post)  setPostData(post);
    } ,[currentId,post]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId)
        {
            dispatch(updatePost(currentId,{...postData,name:user?.name}))
        }
        else dispatch(createPost({...postData,name:user?.name}));
        clear();
    }
    const clear=()=>{
        setCurrentId(null);
        setPostData({
            title:'',message:'',tags:'',selectedFile:''})
    }

    if(!user?.name)
        {
            return( 
            <Paper>
                <Typography style={paper} varient='h6' align="center">Please Sign In to Create Memories and like Other's Memories</Typography>
            </Paper>
            )
        }
    return(
        <Paper style={paper}>
            <form autoComplete="off" noValidate style={form} onSubmit={handleSubmit} >
            <Typography variant='h6'>{ currentId?`Updating`:`Creating`} a memory</Typography>
            <TextField name="title" label="Title" variant="outlined" fullWidth value={postData.title}onChange={(e)=>setPostData({...postData,title:e.target.value})}></TextField>
            <TextField name="message" label="Message" variant="outlined" fullWidth value={postData.message}onChange={(e)=>setPostData({...postData,message:e.target.value})}></TextField>
            <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags}onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}></TextField>
            <div style={fileInput}>
                <FileBase type="file"multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} ></FileBase>
            </div>
        
        <Button style={buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button  varient="contained" color="secondary" size="small" onClick={clear}   >Clear</Button>
        </form>
        </Paper>
    )
}
export default Form;