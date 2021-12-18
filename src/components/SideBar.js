import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './SideBar.css';
import { IconContext } from 'react-icons';
import logo from '../graphics/foodLogo.png';


    

function SideBar() {

    const [sidebar, setSidebar] = useState(false); 
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <div>
        <IconContext.Provider value={{ color: '#fff' }}> {/* Icon and text color */}

          <div className='sidebar'>
            <Link to='#' className='menu-bars'> {/* closes sidebar on background click */}
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link className='logo' to={'/'} ><img className='logo' src={logo} alt="logo"/></Link>
          </div>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> {/* changes CSS when menu is active */}
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='sidebar-toggle'>
                   <Link to='#' className='menu-bars'> {/* closes sidebar on X click */}
                     <AiIcons.AiOutlineClose />
                   </Link>
                 </li>{/* makes links from sidebar data page */}
                  {SideBarData.map((item, index) => { 
                    return (
                     <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                     </li>
                     );
                   })}
            </ul>
          </nav>
       </IconContext.Provider>
     </div>
    )
}

export default SideBar;