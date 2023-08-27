import React from "react";
import "./settings.css";
import SideBar from "../sidebar/SideBar";

function Settings() {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">update your account</span>
            <span className="settingsDeleteTitle">delete account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              {/* settingsPP : settings profile picture */}
              {/* insert profile image here  */}
              <img src="" alt="profileimage" />
              <label htmlFor="fileInput">
                <i className=" settingsPPIcon   fa-regular fa-circle-user"></i>
              </label>
              <input type="file"  id="fileInput" style={{display:"none"}}/>
              </div>

              <label >Username</label>
              <input type="text" placeholder="user"/>
              <label >Email</label>
              <input type="email" />
              <label > Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
            
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default Settings;
