// import './App.css';

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  const user = true;
  return (
    
    <Router>
        <TopBar/>

        <Routes>
          <Route 
            path="/" 
            element={<Home/>} />
          <Route 
            path="/register" 
            element={user? <Home/> : <Register/>} />
          <Route 
            path="/login" 
            element={<Login/>} />
          <Route 
            path="/write" 
            element={user ? <Write/> : <Register/>} />
          {/* <Route 
            path="/settings" 
            element={user ? <Settings/> : <Register/>} /> */}
          <Route 
            path="/post/:postId" 
            element={<Single/>} />

        </Routes>




        {/* ----------------------------------------------------- */}
        {/* <Home/> */}
        {/* <Single/> */}
        {/* <Write/> */}
        {/* <Login/> */}
        {/* <Register/> */}
    </Router>

  );
}

export default App;
