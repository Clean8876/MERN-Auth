import { useState, useEffect } from "react";
import Navbar from "../Appbar/Navbar";

 // Import useNavigate for navigation

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const users = JSON.parse(localStorage.getItem("user")); // Parse user data
// Utilize useNavigate for redirection

  // Check login status when component mounts or login state changes
  useEffect(() => {
    if (users) {
      setIsLoggedIn(true);
    } 
  }, [users]);


  return (
    <div>
     
      <Navbar />
      {isLoggedIn ? (
        // eslint-disable-next-line react/no-unescaped-entities
        <h1 className="text-2xl font-bold">Hi {users.name}, hope you're doing well!</h1>
      ) : (
        <h1 className="font-bold text-4xl font-sans">Please do login</h1>
      )}
    </div>
  );
}

export default Home;
