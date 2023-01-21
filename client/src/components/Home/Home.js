import React ,{useState,useEffect} from "react";
import { Grow,Grid,Paper,AppBar,TextField,Button } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from '../Form/Form';
import { useDispatch } from "react-redux";
import {getPostsBySearch} from '../../actions/posts'
import Paginate from "../Pagination/Pagination";
import {useNavigate,useLocation} from 'react-router-dom';
import {MuiChipsInput} from 'mui-chips-input' // best package kekek
import { Container } from "@mui/system";
import classes from './styles.js'

function useQuery()
{
  return new URLSearchParams(useLocation().search);
}
function Home()
{
  const navigate=useNavigate();
  const query=useQuery();
  const dispatch=useDispatch();
  const [currentId,setCurrentId]=useState(null);
  const page=query.get('page')||1;
  const searchQuery=query.get('searchQuery');

  const [search , setSearch]=useState("");
  const [tags,setTags]=useState([ ]);

  // console.log(tags);
    function searchPosts()
    {
      if(search.trim() || tags)
      {
        //dispatch a search action to posts
        dispatch(getPostsBySearch({search,tags:tags.join(',')}))
        navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      }
      else navigate('/')
    }
    function handleKeyPress(e)
    {
      if(e.keyCode===13){
        searchPosts()
      }
    }

    function handleChangeTags(newTag)
    {
      setTags(newTag);
    }

    
    return (

        <Grow in> 
        <Container maxWidth='xl'>
          <Grid container  justify="space-between" alignItems="stretch" sx={classes.gridContainer} spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}>
              </Posts>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar sx={classes.appBarSearch} position='static' color='inherit' >

                <TextField 
                  name='search' 
                  varient='outlined' 
                  label='Search Memories' 
                  fullWidth
                  value={search}
                  onKeyPress={handleKeyPress}
                  onChange={(e)=>{setSearch(e.target.value)}}
                  ></TextField>

                <MuiChipsInput
                  label='Search tags'
                  style={{margin:'10px 0'}}
                  value={tags}
                  onChange={handleChangeTags}>
                </MuiChipsInput>

                <Button onClick={searchPosts} sx={classes.searchButton} varient='contained'>SEARCH</Button>

              </AppBar>
              <Form  currentId={currentId} setCurrentId={setCurrentId}  ></Form>
              <Paper  elevation={6}>
                  <Paginate page={page}></Paginate>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        
      </Grow>
    )
}
export default Home;