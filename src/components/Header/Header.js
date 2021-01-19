import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from './economist-logo.png' 
import menu from './hamburger-menu.png'
import axios from 'axios'
import {logout} from '../../redux/subscriberReducer'



const Header = (props) => {

    const logout = () => {
        axios
        .get('/auth/logout')
        .then(() => {
            //send information about them to redux and then send them home
            props.logout()
            props.history.push('/')})
            .catch((err)=> console.log(err))
    }


    return (
        <div className='header'>
            <div>
                <Link to='/'>
                <img className='logo' src={logo} alt="economist-logo" />
                </Link>
            </div>

            <nav>
                <div className='menu'>
                    <img className='ham-menu' src={menu}/>
                    <h1 className='li'>Menu</h1>
                </div>


                <div className=''>
                    {props.isLoggedIn ? 
                    
                    <div className='login'>
                        <h3 className='sign-in'>Welcome, {props.first_name}</h3>

                    <button
                    className='btn-subscribe'
                    onClick={logout}>Logout</button>
                    </div>

                    :

                    <div className='login'>
                    <Link to='/subscribe'>
                        <button className='btn-subscribe'>Subscribe</button>
                    </Link>


                    <Link to='/login'>
                        <p className='sign-in'>Sign In</p>
                    </Link>
                    </div>
                    }
                
                </div>
            </nav>
        </div>
    )
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {logout})(withRouter(Header))
 