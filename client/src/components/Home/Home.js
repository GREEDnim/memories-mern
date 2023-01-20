import React ,{useState,useEffect} from "react";
import { Grow,Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from '../Form/Form';
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts'

function Home()
{

    // for every action we must call it with dispatch rather than chaning the state. state changing will be done by redux
  const dispatch=useDispatch();
  const [currentId,setCurrentId]=useState(null);
    useEffect(()=>{
       dispatch(getPosts());
    },[dispatch])
  
    return (

        <Grow in> 
        <Grid container  justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}>
            </Posts>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form  currentId={currentId} setCurrentId={setCurrentId}  ></Form>
          </Grid>
        </Grid>
      </Grow>
    )
}
export default Home;