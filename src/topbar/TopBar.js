import React,{useState} from 'react'
import './TopBar.css'
import './Responsive.css'

export default function TopBar() {
  var [display, setDisplay] = useState('block')

  // if(window.innerWidth<778){
  //   setDisplay('none')
  // }
  // else{
  //   setDisplay('none')
  // }

  // var menu = document.getElementsByClassName('topRight')[0]
  
  function toggle(){
    if(display==='none'){
      setDisplay('block')
    }
    else{ 
      setDisplay('none') ;
    }
  }
  
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
            <img src="" alt="logo" />
            <h1>LOGO</h1>
          </div>

          <div className="topCenter" style={{display:display}}> 
            <ul className="topList">
              <li className="topListItem">Home</li>
              <li className="topListItem">About</li>
              <li className="topListItem">Contect</li>
              <li className="topListItem">Write</li>
              <li className="topListItem">Logout</li>
            </ul>
          </div>

          {/* <div className="menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div> */}

          <div className="topRight">
            <img className='topImg' src="https://source.unsplash.com/random" alt="" />
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
