

import {CREATE,UPDATE,DELETE,FETCH_ALL, FETCH_BY_SEARCH} from '../constants/ActionTypes'
//reducer takes the old state and action and return a new state,depending upon the action it needs to do;

export default function posts(state={posts:[]},action)
{
    // console.log(action.type);
    switch (action.type) {
        case FETCH_ALL:
            return {...state,
                posts:action.payload.data,
                currentPage:action.payload.currentPage,
                numberOfPages:action.payload.numberOfPages
            };
        case CREATE:
            {
                //  console.log(action.payload);
                //  console.log("reducer got data");
                return { ...state, posts: [...state.posts, action.payload] };
            }
        case UPDATE:
            {
                return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
            }
        case DELETE:
        {
            
            return {...state,posts:state.posts.filter((post)=>post._id!== action.payload)} ;
        }        
        case FETCH_BY_SEARCH:
            {
                return {...state,posts:action.payload};
            }
        default:
            return state;
    }

}