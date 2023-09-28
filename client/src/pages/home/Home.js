import React, { useEffect, useState } from "react";
import "./Home.css";
import "./Responsive.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios"
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    // console.log('location=',search)

    useEffect(()=>{
      const fetchPosts = async()=>{
        const res = await axios.get(`http://localhost:5000/api/posts/${search}`);
        // console.log(res.data)
        setPosts(res.data);
      }

      fetchPosts()
    },[search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
