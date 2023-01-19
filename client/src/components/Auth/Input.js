import React from 'react'
import { TextField,Grid,InputAdornment,IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Input = ({name,handleChange,label,type,handleShowPassword,autoFocus}) => {
  return (
   <Grid item >

    <TextField 
     name={name}
    onChange={handleChange}
    varient='outlined'
    required
    label={label}
    fullWidth
    autoFocus={autoFocus}
    type={type}
    InputProps={ name==='password' ? {
        endAdornment :(
            <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                    {type==='password'?<VisibilityIcon></VisibilityIcon>:<VisibilityOffIcon></VisibilityOffIcon>}
                </IconButton>
            </InputAdornment>
        )
    }:null} ></TextField>

   </Grid>
  )
}

export default Input
