

import {CREATE,UPDATE,DELETE,FETCH_ALL} from '../constants/ActionTypes'
//reducer takes the old state and action and return a new state,depending upon the action it needs to do;

export default function posts(posts=[],action)
{
    // console.log(action.type);
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            {
                //  console.log(action.payload);
                //  console.log("reducer got data");
                return [...posts,action.payload];
            }
        case UPDATE:
            {
                return posts.map((post)=>post._id===action.payload._id?action.payload:post);
            }
        case DELETE:
        {
            return posts.filter((post)=>post._id!== action.payload);
        }        
          
        default:
            return posts;
    }

}