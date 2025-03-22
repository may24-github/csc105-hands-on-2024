//Create a navigation bar with links to the Home, Login, and Favourites pages.
//Use the NavLink component from React Router DOM for navigation.

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                
                    <NavLink exact to="/" activeClassName="active">
                        Home  
                    </NavLink>
                
              
                    <NavLink to="/login" activeClassName="active">
                        Login 
                    </NavLink>
              
                    <NavLink to="/favourites" activeClassName="active">
                        Favourites 
                    </NavLink>
                
            </ul>
        </nav>
    );
};

export default Navbar;