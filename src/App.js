// import './App.css';

// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Settings from "./settings/Settings";

function App() {
  return (
    <>
      <TopBar />
      {/* {/* <Home/> */}
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Login/> */}
      <Register />
      <Settings />
    </>
  );
}

export default App;
