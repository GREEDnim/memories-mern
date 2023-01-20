import React from "react";
import {Container} from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google';
import { GOOGLE_OAUTH_CLIENT_ID } from "./constants/keys.js";
function App() {
  
  return (
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
        <Container maxWidth="lg">
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
}

export default App;
