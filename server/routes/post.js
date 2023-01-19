import express from "express";
import { getPosts ,createPost,updatePost,deletePost,likePost} from "../controller/post.js";
const router=express.Router();


//this is reached only after appending in front the value used in index.js , that is using this
// ie http://localhost:5000/posts and not http://localhost:5000/
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);

export default router;