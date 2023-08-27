import React from 'react'
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

            <a className='loginRegisterButton' href='#'>New user? register here</a>
        </form>

    </div>
  )
}
