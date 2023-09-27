import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>

        <form action="" className="registerForm">
            <label htmlFor="">User name:</label>
            <input type="email" className='registerInput' placeholder='Enter your username...'/>
            <label htmlFor="">Email:</label>
            <input type="email" className='registerInput' placeholder='Enter your email...'/>
            <label htmlFor="">Password:</label>
            <input type="password" className='registerInput' placeholder='Enter your password...'/>
            <label htmlFor="">Confrim Password:</label>
            <input type="password" className='registerInput' placeholder='Enter your password again...'/>
            <button className='registerButton'>Register</button>

            <Link to='/login' className='registerLoginButton' >Already register? login here</Link>
        </form>

    </div>
  )
}
