import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {loginSubscriber} from '../../redux/subscriberReducer'
import {connect} from 'react-redux'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()

        axios
        .post('/auth/login', {email, password})
        .then((res) => {
            props.loginSubscriber(res.data.first_name)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='login-page'>
            <h1>Log in with The Economist</h1>
            <form className='login-form'>
                <p>Email address</p>
                <input
                className='input-login-email'
                type='text'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                />

                <p>Password</p>
                <input
                className='input-login-email'
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                />
   
            <button className='btn-create-account'
            type='submit'
            onClick={login}>
                Login
            </button>

            <div className='no-account'>
                <p>Don’t have an account? <Link to= '/register'>Register now</Link></p>
            </div>
            </form>

            
        </div>
    )
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {loginSubscriber})(Login)
