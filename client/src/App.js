import React from "react";
import {Container} from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
// import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  
  return (
    
      <Container maxWidth="lg">
        <Navbar></Navbar>
        <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/auth' element={<Auth></Auth>}></Route>
        </Routes>
      </Container>
    
      
  );
}

export default App;
