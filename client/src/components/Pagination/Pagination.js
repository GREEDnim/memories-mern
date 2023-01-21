import React ,{useEffect}from 'react';
import { Pagination,PaginationItem} from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { getPosts } from '../../actions/posts';
const style={
    ul:{
        justifyContent:`space-around`,
    }
}

const Paginate=({page})=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        if(page) dispatch(getPosts(page))
    },[page,dispatch])
    
    const {numberOfPages}=useSelector((state)=>{
        // console.log(state);
       return  state.posts });
    // console.log(numberOfPages)

    return(
        <Pagination sx={style.ul}
        count={Number(numberOfPages)||1 }
        page={Number(page)||1}
        varient='outlined'
        color='primary'
        renderItem={(item)=>(
            <Link to={`/posts?page=${item.page}`}  style={{ textDecoration: 'none' }} >
            <PaginationItem  {...item} ></PaginationItem>
            </Link>
            
        )}
        ></Pagination>
    )
}
export default Paginate;