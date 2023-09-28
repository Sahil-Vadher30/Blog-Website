import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
  
    const handleSubmit =  async(e)=>{
      e.preventDefault();

      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }      
    }


  return (
    <div className='login'>
        <span className="loginTitle">Login</span>

        <form action="" className="loginForm" onSubmit={handleSubmit} >
            <label htmlFor="">Username:</label>
            <input type="text" className='loginInput' placeholder='Username' ref={userRef} />
            <label htmlFor="">Password:</label>
            <input type="password" className='loginInput' placeholder='Password' ref={passwordRef} />
            <button className='loginButton' type='submit' disabled={isFetching} >Login</button>

            <Link to='/register' className='loginRegisterButton' >New user? register here</Link>
        </form>

    </div>
  )
}
