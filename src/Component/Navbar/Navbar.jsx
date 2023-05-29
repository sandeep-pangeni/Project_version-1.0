import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <>
            <div className='header'> 
                <div className='header_logo'>
                    logo
                </div>
                <div className='header_menu'>
                    <NavLink activeClassName="active_class" to='/'>Home</NavLink>
                    <NavLink activeClassName="active_class" to='/about'>About</NavLink>
                    <NavLink activeClassName="active_class" to='/service'>Service</NavLink>
                    <NavLink activeClassName="active_class" to='/blog'>Blog</NavLink>
                    <NavLink activeClassName="active_class" to='/contact'>Contact</NavLink>
                </div>
            </div>


        </>
    )
}

export default Navbar;