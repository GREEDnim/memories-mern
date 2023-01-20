import express from "express";
import { getPosts ,createPost,updatePost,deletePost,likePost} from "../controller/post.js";
const router=express.Router();
import auth from '../middleware/auth.js'

//this is reached only after appending in front the value used in index.js , that is using this
// ie http://localhost:5000/posts and not http://localhost:5000/
router.get('/',getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;