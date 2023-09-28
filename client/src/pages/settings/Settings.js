import React, { useContext, useState } from "react";
import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
import { Context } from "../../context/Context";
import axios from "axios";

function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PublicFolder = "http://localhost:5000/images/";

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "UPDATE_START" });
      const updatedUser = {
        userId: user._id,
        username,
        email,
        password,
      };
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename;
        try {
          await axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {}
      }
      try {
        const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
    };

  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">update your account</span>
            <span className="settingsDeleteTitle">delete account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit} >
            <label>Profile Picture</label>
            <div className="settingsPP">
              {/* settingsPP : settings profile picture */}
              {/* insert profile image here  */}
              <img 
                src={ file ? URL.createObjectURL(file) : 
                      (user.profilePic ? (PublicFolder + user.profilePic) : "https://cdn-icons-png.flaticon.com/128/10628/10628940.png") } 
                alt="profileimage" />
              <label htmlFor="fileInput">
                <i className=" settingsPPIcon   fa-regular fa-circle-user"></i>
              </label>
              <input type="file"  id="fileInput" style={{display:"none"}} onChange={ (e) => setFile(e.target.files[0]) } />
              </div>

              <label >Username</label>
              <input type="text" placeholder={user.username} onChange={e => {setUsername(e.target.value)}} />
              <label >Email</label>
              <input type="email" placeholder={user.email} onChange={e => {setEmail(e.target.value)}} />
              <label > Password</label>
              <input type="password" onChange={e => {setPassword(e.target.value)}} />
              <button className="settingsSubmit" type="submit" >Update</button>

              {success && (
                <span
                  style={{ color: "green", textAlign: "center", marginTop: "25px" }}
                >
                  Profile has been updated successfully
                </span>
              )}
            
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default Settings;
