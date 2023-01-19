import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import memories from '../../images/memories.png'
import { Link } from 'react-router-dom';
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";


function Navbar() {

    const user = null;

    return (
        <AppBar position="static" color="inherit" sx={{
            borderRadius: '15px',
            margin: '30px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 50px',
            flexDirection: {
                xs: 'column-reverse', sm: 'row'
            }
        }}>
            <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', }}>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <Typography varient="h2" align="center" sx={{ color: '#1976d2', textDecoration: 'none', fontSize: '2em', fontWeight: 300, }} >MEMORIES</Typography>
                </Link>
                <img src={memories} alt="memories" height="60" sx={{ marginLeft: '10px', marginTop: '5px', }} ></img>
            </Container>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', width: { xs: 'auto', sm: '400px' } }}>
                {
                    user?(
                        <Container sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-between' }, width: { xs: 'auto', sm: '400px' }, alignItems: 'center', marginTop: { sm: 20 }, }}>
                        <Avatar alt={user.result.name} src={user.result.imageUrl} sx={
                            {
                                color: deepPurple[500],
                                backgroundColor: deepPurple[500],
                            }
                        }>{user.result.name.charAt(0)}</Avatar>
                        <Typography varient='h6' sx={
                            {
                                color: deepPurple[500],
                                backgroundColor: deepPurple[500],
                            }
                        }> {user.result.name}</Typography>
                    </Container>
                    ):null
                }
                <Button varient='contained' color='secondary' sx={
                            {
                                marginLeft: '20px',
                            }
                        } >LOGOUT</Button>
            </Toolbar>

        </AppBar>
    )
}
export default Navbar;
