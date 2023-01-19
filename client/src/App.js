import React from "react";
import {Container} from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Land from "./components/Land/Land";
import {GoogleOAuthProvider} from '@react-oauth/google';
import { GOOGLE_OAUTH_CLIENT_ID } from "./constants/keys.js";
function App() {
  
  return (
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
        <Container maxWidth="lg">
        <Navbar></Navbar>
        <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Land></Land>}></Route>
        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
}

export default App;
