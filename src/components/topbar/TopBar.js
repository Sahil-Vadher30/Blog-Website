import React,{useState} from 'react'
import './TopBar.css'
import './Responsive.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
  // ---------to toggle menu--------------------------
  var [display, setDisplay] = useState(false);
  
  function toggle(){
    setDisplay(!display);
  }
  // --------------------------------------------------

  var user = false;
  
  return (
    <>
      <div className="topCorner">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
      </div>


      <div className='top'>
          <div className="topLeft">
            <img 
              src="https://t3.ftcdn.net/jpg/03/36/03/58/360_F_336035825_Fp8RhUsacD8aAJDwk1oZO37VMJTTNJJS.jpg" 
              alt="logo" 
            />
            <h1>BLOG</h1>
          </div>

          <div className={`topCenter ${display? 'visible' : ''}`}  style={{display:display}}> 
            <ul className="topList">
              <li className="topListItem">
                <Link to='/'>HOME</Link>
              </li>
              <li className="topListItem">
                <Link to='/'>ABOUT</Link>
              </li>
              <li className="topListItem">
                <Link to='/'>CONTECT</Link>
              </li>
              <li className="topListItem">
                <Link to='/write'>WRITE</Link>
              </li>
              {
                user &&
                <li className="topListItem">
                 <Link to='/'>LOGOUT</Link>
                </li>
              }
            </ul>
          </div>

          <div className="topRight">
            {
              user ? (
                <img className='topImg' src="https://source.unsplash.com/random" alt="" />
              ) : (
                <>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
              )
            }
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="menu" onClick={toggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

      </div>
    </>
  )
}
