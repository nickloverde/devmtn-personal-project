import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()

        axios
        .post('/auth/signin', {email, password})
        .then((res) => {
            // props.getSubscriberData(res.data)
            // setEmail(res.data)
            // setPassword(res.data)
        })
        .catch(err => console.log(err))

        // if (props.subscriber.isLoggedIn) props.history.push('/home')
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
            type='button'
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

export default Login
