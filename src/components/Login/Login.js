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
        <div>
            <h1>Login with The Economist</h1>
            <form>
                <input
                type='text'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                />
            </form>

            <button
            type='button'
            onClick={login}>
                Login
            </button>

            <div>
                <p>Don’t have an account? <Link to= '/register'>Register now</Link></p>
            </div>
            
        </div>
    )
}

export default Login
