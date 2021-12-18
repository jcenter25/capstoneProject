//Replaced by Side Bar

import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <nav className='navbar'>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/recipelist"> Recipe List </Link>
      </nav>
    );
}


export default NavBar;