import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import {mainContainer,smMargin,actionDiv} from './Postscss';

import {Grid, CircularProgress} from '@mui/material';
function Posts({setCurrentId})
{
    const posts=useSelector((state)=>state.posts);
    // console.log(posts);
    // console.log("re");
    
        if(!posts.length)
        {
            
            return <CircularProgress></CircularProgress>
        }
        else{
            return (
                <Grid style={mainContainer} container alignItems='stretch' spacing={3}>
                    {
                        posts.map((post)=>{ return(
                            <Grid item  key={post._id} xs={12} sm={6}>
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