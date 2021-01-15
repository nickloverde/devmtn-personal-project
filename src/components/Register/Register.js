import React from 'react'
import { useState } from 'react'
import axios from 'axios'

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
            props.history.push('/home')})
        .catch((err)=> alert('That email is already taken. Please login or choose a different email'))
    }


    return (
        <div>
            <h1>Create your account</h1>
           <form>
               <input
                type='text'
                placeholder='email'
                onChange={e => setEmail(e.target.value)}
               />

               <input
                type='password'
                placeholder='password'
                onChange={e => setPassword(e.target.value)}/>

               <input
                type='text'
                placeholder='first name'
                onChange={e => setFirstName(e.target.value)}/>

               <input
                type='text'
                placeholder='last name'
                onChange={e => setLastName(e.target.value)}/>

            </form> 

            <div>
                <p>By creating an account, you agree to our terms and conditions and acknlowedge our privacy policy</p>
            </div>

            <div>
            <button
               type='button'
               onClick = {register}
               >Create Account</button>
            </div>

            <div>
                <p>Already have an account? Log In</p>
            </div>

        </div>
    )
}

export default Register
