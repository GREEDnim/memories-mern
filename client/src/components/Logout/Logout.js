import React from 'react'
import { useDispatch } from 'react-redux';
import { removeGoogleUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { Button } from '@mui/material';
 



function Logout() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  function logout()
  {
    googleLogout();
    dispatch(removeGoogleUser());
    navigate("/")
  }
  

  return (
    <Button varient='contained' color='secondary'  onClick={logout}>LOGOUT</Button>
  )
}

export default Logout;
