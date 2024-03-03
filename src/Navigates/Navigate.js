import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Comp/Header";
import Home from "../Homes/Home";
import Footercr from "../Comp/Footercr";

const Navigate = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <div>
        <Footercr/>
      </div>
    </Router>
  );
};

export default Navigate;
