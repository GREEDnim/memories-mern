import React from "react";

import { Card,CardActions,CardContent,CardMedia,Button,Typography } from "@mui/material";
import {obj} from './Postcss'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment';
import {useDispatch} from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";





function Post({post,setCurrentId})
{
    const dispatch=useDispatch();
    const classes=obj;
    // console.log(post);

    const user = JSON.parse(localStorage.getItem('profile'));
    // console.log(user);;
    // console.log(post);
    const Likes = () => {
      if (post.likes.length > 0) {
       
        return post.likes.find((like) => like === (user?.sub))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
    };
  
    return(
        
        <Card style={classes.card}>
            <CardMedia style={classes.media} image={post.selectedFile} title={post.title} component='div'></CardMedia>
            <div style={classes.overlay}>
                <Typography varient="h6">{post.name}</Typography>
                <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>

            </div>
            {(user?.sub===post?.creator) &&(
            <div style={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>{ setCurrentId(post._id)}} >
                    <MoreHorizIcon fontSize="default"></MoreHorizIcon>
                </Button>
            </div>
            )}
            <div style={classes.details}>
                <Typography varient="body2" color="textSecondary">{post.tags.map( (tag)=>`#${tag} ` )}</Typography>
            </div>
            <Typography style={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography  variant="body2"color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>
            <CardActions style={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user} onClick={()=>{dispatch(likePost(post._id))}}>
                    <Likes></Likes>
                </Button>
                {(user?.sub===post?.creator) &&
                     (<Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
                        <DeleteIcon fontSize="small"></DeleteIcon>
                        Delete
                    </Button>) }
                
                
            </CardActions>
        </Card>
    );
}
export default Post;