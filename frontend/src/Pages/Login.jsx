import Navbar from "../Appbar/Navbar"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link  from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as Rl } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../slice/userSlice";


function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoading, error } = useSelector((state) => state.user);
  
  const handleSubmit = async (event) => {
   event.preventDefault();
try{

     const res = await dispatch(login({ name, password }))
  
    if(res) {
      setName('');
      setPassword('');
    /*   localStorage.setItem('user', JSON.stringify(result.user)); */
      navigate('/');

    }
  }
    catch(err){
      console.error("Login errro",err)
    }
    
  };
  return (
    <div>
        <Navbar/>
        
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#003366' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:'#003366'}}
            >
            {isLoading?'....Loging in':'sign in'}
            </Button>
            {error && <div>{error}</div>}
            <Grid container>
              <Grid item xs>
                <Link >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link> <Rl to='/signup'>
                  {"Don't have an account? Sign Up"}
                </Rl>
                </Link>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  
    </div>
  )
}

export default Login