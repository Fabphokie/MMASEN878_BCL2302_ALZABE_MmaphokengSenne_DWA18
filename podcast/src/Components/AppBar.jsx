import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import '../App.css';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button'

const navLinkStyling = {

  color: 'white',
  fontSize: '1em',
  
};

const navBrandStyling = {

  color: 'white',
  fontWeight: 'bold',
  fontSize: '2em',

};

const navbarStyling = {

  backgroundColor: 'rgb(129, 117, 117)',
  padding: '1% 7%',

};

export default function AppBar(props) {

  return (

    <>

      <Navbar expand="lg" sticky="top" collapseOnSelect style={navbarStyling}>

        <Navbar.Brand style={navBrandStyling}>
        <img  src="src/images/podcast.gif" className='Logo--gif'/> 
          PodPal_Phokie
        </Navbar.Brand>

        <NavbarToggle />

        <NavbarCollapse style={{ padding: '0 0 0 0' }}>

          <Nav>

            {props.isLoggedIn?
            <Nav.Link style={navLinkStyling} href="#Favorites">
              Favorites
            </Nav.Link>

            : null}

            <Nav.Link style={navLinkStyling} href="#Podcasts">
              Podcasts
            </Nav.Link>

            {props.isLoggedIn ? 
            <Button style={navLinkStyling} onClick={props.onLogout}>
              Logout
            </Button>
              
             : null}

          </Nav>

        </NavbarCollapse>

      </Navbar>

      { props.isLoggedIn?
      
      <div className="header">
        
        <ul>

          <li>Sort by [A-Z]</li>
          <li>Sort by [Z-A]</li>
          <li>Sort by latest</li>
          <li>Sort by oldest</li>
          <li>Filter by genre</li>
          
        </ul>

        <SearchBar />

      </div>

      : null}
      
    </>

  );

}


