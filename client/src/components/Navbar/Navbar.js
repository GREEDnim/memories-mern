import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import memories from '../../images/memories.png'
import { Link ,useNavigate} from 'react-router-dom';
import { Avatar } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import classes from './style.js'
import Login from "../LogIn/Login";
import Logout from "../Logout/Logout";


function Navbar() {
let user=null;  
user=useSelector(({auth})=>auth).authData;
    //since store has two different states, both will be present.
    // console.log(JSON.parse(localStorage.getItem('profile') ));
    // const [user,setUser]=useState( JSON.parse(localStorage.getItem('profile') ) );
    console.log(user);
    
    return (
        <AppBar position="static" color="inherit" sx={classes.appBar}>
            <Container sx={classes.brandContainer}>
                <Link  to={user===null?'/':'/home'} sx={classes.heading} style={{ textDecoration: 'none' }}>
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
                    user===null?<Login></Login>: <Logout></Logout>
                }               
               
            </Toolbar>

        </AppBar>
    )
}
export default Navbar;
