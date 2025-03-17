import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      {/* <div
        className="navbar-component"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: "1",
        }}
      >
       
      </div> */}
      {/* <div className="other-components" style={{ marginTop: "70px" }}> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* </div> */}
    </div>
  );
};

export default App;
