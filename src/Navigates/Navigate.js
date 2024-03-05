import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Comp/Header";
import Home from "../Homes/Home";
import Footercr from "../Comp/Footercr";
import Introduction from "../About/Introduction";
import Mission from "../About/Mission";
import Strent from "../About/Strent";
import Quality from "../About/Quality";
import Saftey from "../About/Saftey";
import Electrical from "../Service/Electrical";
import Plumbing from "../Service/Plumbing";
import HVAC from "../Service/HVAC";
import Fire from "../Service/Fire";

const Navigate = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/introduction" element={<Introduction />}></Route>
        <Route path="/missionvission" element={<Mission />}></Route>
        <Route path="/ourstrength" element={<Strent />}></Route>
        <Route path="/qualtyassurance" element={<Quality />}></Route>
        <Route path="/safetymanagement" element={<Saftey />}></Route>
        <Route path="/electricalcontracting" element={<Electrical />}></Route>
        <Route path="/plumbingcontracting" element={<Plumbing />}></Route>
        <Route path="/HVACcontracting" element={<HVAC />}></Route>
        <Route path="/firecontracting" element={<Fire/>}></Route>
      </Routes>

      <div>
        <Footercr/>
      </div>
    </Router>
  );
};

export default Navigate;
