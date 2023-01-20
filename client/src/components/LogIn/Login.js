import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { setGoogleUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';


 



function Login({setUser}) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function successHandler(res)
  {
    const decoded=jwt_decode(res.credential);
    // console.log(decoded);
    dispatch(setGoogleUser(decoded));
    setUser(JSON.parse(localStorage.getItem('profile')));
    // navigate('/home');
    
  }
  function failureHandler(error)
  {
    console.log(error);
  }

  return (
    
    <GoogleLogin
    onSuccess={successHandler}
    onError={failureHandler}
    cookiePolicy='single_host_origin'
    ></GoogleLogin>
  )
}

export default Login;
