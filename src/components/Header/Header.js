import React from 'react'
import logo from './economist-logo.png' 



export default function Header() {
    return (
        <div>
            <img className='img' src={logo} alt="economist-logo" />
            <h1>Menu</h1>
        </div>
    )
}
