import { Button } from "@mui/material"
import { Link } from "react-router-dom"
export const Login=()=>{

    
    return(<Button color="inherit" component={Link} to="/login">
      Login
    </Button>)
    
}