import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slice/userSlice';
import { useEffect,useState } from 'react';
import { Login } from '../components/buttons/Login';
import Signup from '../components/buttons/Signup';



const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut =()=>{
    dispatch(logout());
    setIsLoggedIn(false)
    navigate('/');
   
    
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const users = JSON.parse(localStorage.getItem("user")); // Parse user data
// Utilize useNavigate for redirection

  // Check login status when component mounts or login state changes
  useEffect(() => {
    if (users) {
      setIsLoggedIn(true);
    } 
  },[users]);


  return (
   <Box sx={{ flexGrow: 1  }}>
    <AppBar position="static" sx={{bgcolor:'#333333'}}>
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link to="/"style={{ flexGrow: 1 }}>
          MERNAuth</Link>
        </Typography>
        {!isLoggedIn ? (
 <>
    <Login/>
   <Signup/>
  </>
) : (
 <Button color="inherit" onClick={handleLogOut} >
    Logout
  </Button> 
)}
      </Toolbar>
    </AppBar>
  </Box>
  
 
    
);
  
}

export default Navbar