import React, { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SideBar() {
   const [cats, setCats] = useState([]);

   useEffect(()=>{
    const getCat = async() => {
      const res = await axios.get(`http://localhost:5000/api/categories`);
      setCats(res.data);
    }

    getCat();
   },[]);
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {/* image can be changed here */}
        <img 
        // src="../templates/download.jpg"  
        src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="" 
        />
        {/* <img src=""  alt=" image" /> */}
        {/* https://source.unsplash.com/random */}
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          molestiae.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map( (cat, id) => {
              return (
                <Link to={`/?cat=${cat.name}`} style={{color:'inherit'}} >
                  <li className="sidebarListItem" key={id} >{ cat.name }</li>
                </Link>
              )
            } )
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
