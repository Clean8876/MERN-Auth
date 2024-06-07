import { Button } from "@mui/material";
import { Link } from "react-router-dom";



function Signup() {
  return (
    <Button color="inherit" component={Link} to="/signup">
      Signup
    </Button>
  )
}

export default Signup