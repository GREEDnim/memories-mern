// normally in mongodb we wont have a specific format for content , everything can have anything. 
// using mongoose we can structure our data

import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:+0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostMessage=mongoose.model('PostMessage',postSchema);
export default PostMessage;

