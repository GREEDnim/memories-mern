import React from "react";
import {Container} from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import { Route, Routes,Navigate } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google';
import { GOOGLE_OAUTH_CLIENT_ID } from "./constants/keys.js";
import PostDetails from "./components/PostDetails/PostDetails";
function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
        <Container maxWidth="xl">
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={ <Navigate to='/posts'></Navigate>}></Route>
        <Route path='/posts' element={<Home></Home>}></Route>
        <Route path='/posts/search' element={<Home></Home>}></Route>
        <Route path='/posts/:id' element={<PostDetails></PostDetails>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
}

export default App;
