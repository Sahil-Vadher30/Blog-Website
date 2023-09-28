import React, { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PublicFolder = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect( () => {
      const getPost = async() => {
        const res = await axios.get(`http://localhost:5000/api/posts/${path}`);
        // console.log(res);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      }

      getPost();
    },[path]);

    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/Blog-Website");
      } catch (err) {}
    };

    const handleUpdate = async () => {
      try {
        await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
        setUpdateMode(false);
      } catch (err) {}
    };

  return (
    <div className="singlePost">
      {/* adding image */}
      { post.photo && (
          <div className="singlePostWrapper">

              <img
              src={ PublicFolder + post.photo}
              alt=""
              className="singlePostImg"
              />
          </div>
      ) }

      { updateMode ? 

        <input type="text" 
               value={title} 
               className="singlePostTitleInput" 
               onChange={e => {setTitle(e.target.value)}}
               autoFocus
        /> : (

        <h1 className="singlePostTitle">
          {title}

          { post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)} ></i>
              <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete} ></i>
            </div>)
          }

        </h1> )
      }

      {/* adding informgation */}
      <div className="singlePostInfo">
        <div className="singlePostAuthor">
          Author: 
          <Link to={`/?user=${post.username}`} className="link" >
            <b>{ post.username }</b>
          </Link>
        </div>
        <div className="singlePostDate">{ new Date(post.createdAt).toDateString() }</div>
      </div>

      { updateMode ? 
        <textarea className="singlePostDescriptionInput" 
                  value={desc} 
                  onChange={(e) => setDesc(e.target.value)}>
        </textarea> : (
        <p className="singlePostDescription"> { desc }</p>
      )}

      {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate} >
            Update
          </button>
      )}
      
    </div>
  );
}
