import Button from '@mui/material/Button';
import Navbar from '../Appbar/Navbar';
import { logout } from "../slice/userSlice"
import { useDispatch  } from "react-redux"
import { useNavigate } from "react-router-dom"


function Show() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogout  = ()=>{
   dispatch(logout())
      navigate('/login')}
 
  return (
    
    <div>
      <Navbar/>
      <div className='flex justify-center items-center h-screen'><Button variant="contained"  onClick={handleLogout}>Logout</Button></div>
      </div>
    
  )
}

export default Show