import React, { useState } from 'react'
import './Head.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"


function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link className='title'> <img src="/images/bglogo.png" alt="" /></Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <FontAwesomeIcon icon={faBars} />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open " : ""}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li><NavLink to='/about'>About</NavLink></li>
              

                <li className="dropdown">
                    <NavLink to='/Placment'>Services🠻</NavLink>
                    <div className="dropdown-content">
                        <NavLink className="list" to='/Placment'>Professional Placement</NavLink>
                        <NavLink className="list" to='/Services'>IT Consultancy</NavLink>
                        <NavLink className="list" to='/Managment'>Managed IT Services</NavLink>
                    </div>
                </li> 
                
                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Head
