import React from 'react'
import {Link} from 'react-router-dom'
import logo from './economist-logo.png' 
import menu from './hamburger-menu.png'



export default function Header() {
    return (
        <div className='header'>
            <div>
                <Link to='/'>
                <img className='logo' src={logo} alt="economist-logo" /></Link>
            </div>

            <nav>
                <div className='menu'>
                    <img className='ham-menu' src={menu}></img>
                    <h1 className='li'>Menu</h1>
                </div>

                <div className='login'>
                    <Link to='/subscribe'>
                    <button className='btn-subscribe'>Subscribe</button>
                    </Link>

                    <Link to='/login'>
                    <p className='sign-in'>
                        Sign In
                    </p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
