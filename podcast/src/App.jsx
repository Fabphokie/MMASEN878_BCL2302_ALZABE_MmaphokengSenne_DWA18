import { useState, useEffect } from 'react';
import AppBar from './Components/AppBar';
import Login from './Components/LoginPage';
import Display from './Components/Display';
import Footer from './Components/Footer';
import supabase from './supabase';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    setIsLoggedIn(true);
    console.log('Logged in!')


  };

 

  const handleLogout = () => {

    try {

      supabase.auth.signOut();
      setIsLoggedIn(false);
      console.log('Logged out!')

    } catch (error) {

      console.error('Error logging out:', error.message);

    }

  };

  useEffect(() => {

    if (isLoggedIn) {

      setIsLoggedIn(true)

    } else {
      setIsLoggedIn(false)
    }

  }, [isLoggedIn]);

  return (

    <>

      <AppBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Login onLogin={handleLogin} />
      {isLoggedIn ? <Display /> : null}

      <Footer />

    </>

  );

};

export default App