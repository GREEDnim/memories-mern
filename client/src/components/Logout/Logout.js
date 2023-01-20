import React from 'react'
import { useDispatch } from 'react-redux';
import { removeGoogleUser } from '../../actions/auth';
import { googleLogout } from '@react-oauth/google';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 



function Logout({setUser}) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function logout()
  {

    // whenevr i logout , i have to rerender the navigation component so that the data is erased from navigation.
    googleLogout();
    dispatch(removeGoogleUser());
    setUser(null);
    // navigate('/');
  }
  return (
    <Button  varient='contained' color="primary" size="large" type="submit"  style={{backgroundColor:"#f01111",padding:'10px 30px',color:'white'}}  onClick={logout}>LOGOUT</Button>
    
  )
}

export default Logout;
