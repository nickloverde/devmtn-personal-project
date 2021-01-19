import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from './economist-logo.png' 
import menu from './hamburger-menu.png'



function Header(props) {

    // logout() {
    //     axios.get('/auth/logout');
    //     this.setState({ loggedInUser: {} });
    //   }


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

                <h1>{props.first_name}</h1>

                    <Link to='/login'>
                        {props.isLoggedIn && <Link to="/">Logout</Link>}
                        <p className='sign-in'>
                            Sign In
                        </p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps)(Header)
 