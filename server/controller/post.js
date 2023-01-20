
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
export async function getPosts (req,res)
{
    try {
        //we are fetching all the message from database
        //postMessages=PostMessage.find();
        // but fetching data from db takes time, so we should make it asynchronous
        // so we'll make this function async by adding async keyword before function name getPosts(req,res) to async getPosts(req,res)
        //and await before PostMessage.find()
        
        //normal find in mongodb done using mongoose
        const postMessages= await PostMessage.find();

        // if this works , return the result as a json and also a status of 200 in response
        res.status(200);
        res.json(postMessages);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export async function createPost(req,res)
{
    // console.log(req);
    // we are getting the content to be made as a post and converting it into a mongoose object so that we can save it in db
    const post=req.body;
    const newPost= new PostMessage({...post,creator:req.userId , createdAt:new Date().toISOString()});

    try {
            // this is similar to insert in mongodb
            await newPost.save();
            res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
export async function updatePost(req,res)
{
    const {id:_id}=req.params;
    // console.log(_id);
    const post=req.body;
    // const post2=await PostMessage.findById(_id);  // async is goat
    // console.log(post2.createdAt);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No posts with that id");

    const updatedPost=await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.json(updatedPost);
}

export async function deletePost(req,res)
{
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No posts with that id");

    await PostMessage.findByIdAndRemove(_id);
    res.json({messae:"Post deleted successfully"});


}
export async function likePost(req,res)
{
    const {id:_id}=req.params;

    if(!req.userId) res.json('unauthenticated');
    const post=await PostMessage.findById(_id);
    
    // console.log(post.createdAt);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No posts with that id");

    let index=post.likes.findIndex( (id)=>req.userId===id);
    // console.log(index);
    if(index==-1)
    {
        post.likes.push(req.userId);
    }
    else
    {
        post.likes=post.likes.filter( (id)=>req.userId!==id);
    }
    // console.log(post.likes);
    
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,post,{new:true});

    res.json(updatedPost);
}