import React from "react";
import { Button} from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import Header from "../components/Header";
import Landing from "../components/Homepage";


function Home() {
  const { logOutUser } = useContext(UserContext);
  
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
  try {
    // Calling the logOutUser function from the user context.
    const loggedOut = await logOutUser();
    // Now we will refresh the page, and the user will be logged out and
    // redirected to the login page because of the <PrivateRoute /> component.
    if (loggedOut) {
      window.location.reload(true);
    }
  } catch (error) {
    alert(error)
  }
}


  return (
    <div>
     <Button variant="contained" onClick={logOut} style={{   
            marginRight: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      color: 'white',
      backgroundColor: '#3a80e9',
      width: '100%',
      maxWidth: '10rem',
      padding: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '0.5rem',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      float: 'right',
  
    }} 
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    
    >Logout</Button>
      <Header />
      <Landing />
    </div>
  );
}

export default Home;



