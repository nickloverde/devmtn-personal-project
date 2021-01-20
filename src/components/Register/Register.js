import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import regimg from './economist-register.png'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const register = (e) => {
        e.preventDefault()
        axios
        .post('/auth/register', {email, password, first_name:firstName, last_name: lastName})
        .then(() => {
            //send information about them to redux and then send them home
            props.history.push('/')})
        .catch((err)=> alert('That email is already taken. Please login or choose a different email'))
    }


    return (
        <div className='register-container'>
        <div className='register'>
            <h1>Create your account</h1>
            <p>Enter your details here to subscribe</p>

            <div className='form'>
                <form>
                    <p>Email</p>
                    <input
                        type='text'
                        className ='register-input'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <p>Password</p>
                    <input
                        type='password'
                        className ='register-input'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}/>

                    <p>First Name</p>
                    <input
                        type='text'
                        className ='register-input'
                        placeholder='first name'
                        onChange={e => setFirstName(e.target.value)}/>

                    <p>Last Name</p>
                    <input
                        type='text'
                        className ='register-input'
                        placeholder='last name'
                        onChange={e => setLastName(e.target.value)}/>

                </form> 

                    <div className='terms'>
                        <p>By creating an account, you agree to our terms and conditions and acknlowedge our privacy policy</p>
                    </div>

                    <div className='create'>
                    <button
                    type='submit'
                    className="btn-create-account"
                    onClick = {register}
                    >Create Account</button>
                    </div>

                    <div className='already-account'>
                        <p>Already have an account? </p>
                        <Link to='/login'>
                            <p>Log In</p>
                        </Link>
                    </div>

            </div>

        </div>

        <div className='regimg-container'>
               <img src={regimg} className='register-img'/>
        </div>

        </div>
    )
}

export default Register
