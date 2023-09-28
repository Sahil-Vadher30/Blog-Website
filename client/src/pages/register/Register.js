import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [error, setError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      setPwdError(false);
      try {
        if (password===confPassword){
          const res = await axios.post("http://localhost:5000/api/auth/register", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/Blog-Website/login");
        } else{
          setPwdError(true);
          // alert('password and confrim password must be same')
        }

      } catch (err) {
        // alert('user name is alredy exist, choose diffrent user name')
        setError(true);
      }
    };
  
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>

        <form action="" className="registerForm" onSubmit={handleSubmit} >
            <label htmlFor="">User name:</label>
            <input type="text" className='registerInput' placeholder='Enter your username...' onChange={e=>{setUsername(e.target.value)}} />
            {error && <h4 style={{color:'red'}} >user name is alredy exist, choose diffrent user name</h4>}
            <label htmlFor="">Email:</label>
            <input type="email" className='registerInput' placeholder='Enter your email...' onChange={e=>{setEmail(e.target.value)}} />
            <label htmlFor="">Password:</label>
            <input type="password" className='registerInput' placeholder='Enter your password...' onChange={e=>{setPassword(e.target.value)}} />
            <label htmlFor="">Confrim Password:</label>
            <input type="password" className='registerInput' placeholder='Enter your password again...' onChange={e=>{setConfPassword(e.target.value)}} />
            {pwdError && <h4 style={{color:'red'}} >password and confrim password must be same</h4>}
            <button className='registerButton' type='submit' >Register</button>

            <Link to='/login' className='registerLoginButton' >Already register? login here</Link>
        </form>

    </div>
  )
}
