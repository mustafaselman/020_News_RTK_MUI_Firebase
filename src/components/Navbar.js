import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { toast } from 'react-toastify';

export default function Navbar() {
    const navigate = useNavigate();
    const user = React.useContext(UserContext);

    const logout = async () =>
  {
    await signOut(auth)
    toast.success("Signout successful...", {
      position: toast.POSITION.TOP_RIGHT
    });
    localStorage.removeItem("searchedAdress");
     
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow:1 }}>
            <Typography variant="h6" component="span" sx={{ color: 'yellow' }}>Breaking</Typography>News
          </Typography>
          {user ? (
            <div>
              <Typography component="label" sx={{ color: 'yellow' }} >{user?.displayName ? ("Welcome  " + user.displayName) : user.email}</Typography>
              
              <Button onClick={logout} color="inherit" >Sign Out</Button>
            </div>
          ) : (<div>
            <Button onClick={()=>{navigate("/login")}} color="inherit">Login</Button>
            <Button onClick={()=>{navigate("/register")}} color="inherit">Register</Button>
          </div>)


          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}