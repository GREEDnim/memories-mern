import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import {mainContainer,smMargin,actionDiv} from './Postscss';

import {Grid, CircularProgress} from '@mui/material';
function Posts({setCurrentId})
{
    const {posts}=useSelector((state)=>{
        // console.log(state);    
        return state.posts;
    });    
        if(!posts?.length)
        {
            
            return <CircularProgress></CircularProgress>
        }
        else{
            return (
                <Grid style={mainContainer} container alignItems='stretch' spacing={3}>
                    {
                        posts.map((post)=>{ return(
                            <Grid item  key={post._id} xs={12} sm={12} md={6} lg={3}>
                                <Post post={post}  setCurrentId={setCurrentId} ></Post>
                            </Grid>
                        )
                        })

                    }

                </Grid>
            )
        }
    ;
}
export default Posts;