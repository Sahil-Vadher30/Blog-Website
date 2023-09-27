import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>

        <form action="" className="loginForm">
            <label htmlFor="">Email:</label>
            <input type="email" className='loginInput' placeholder='Email'/>
            <label htmlFor="">Password:</label>
            <input type="password" className='loginInput' placeholder='Password'/>
            <button className='loginButton'>Login</button>

            <Link to='/register' className='loginRegisterButton' >New user? register here</Link>
        </form>

    </div>
  )
}
