import React,{useState} from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import memories from '../../images/memories.png'
import { Link } from 'react-router-dom';
import { Avatar } from "@mui/material";
import classes from './style.js'
import Login from "../LogIn/Login";
import Logout from "../Logout/Logout";
function Navbar() {

    // console.log("navbar");
    const [user,setUser]=useState( JSON.parse(localStorage.getItem('profile')) );
    return (
        <AppBar position="static" color="inherit" sx={classes.appBar}>
            <Container sx={classes.brandContainer}>
                <Link  to='/' sx={classes.heading} style={{ textDecoration: 'none' }}>
                    <Typography varient="h2" align="center" sx={{ color: '#1976d2', textDecoration: 'none', fontSize: '2em', fontWeight: 300, }} >MEMORIES</Typography>
                </Link>
                <img src={memories} alt="memories" height="60" sx={classes.image} ></img>
            </Container>
            <Toolbar sx={classes.toolbar}>
                {
                    user?(
                        <Container sx={classes.profile }>
                        <Avatar alt={user.name} src={user.picture} sx={classes.purple }></Avatar>
                        <Typography varient='h6' sx={classes.userName}> {user.name}</Typography>
                    </Container>
                    ):null
                }
                {
                    user===null?<Login setUser={setUser}></Login>: <Logout setUser={setUser}></Logout>
                }               
               
            </Toolbar>

        </AppBar>
    )
}
export default Navbar;
