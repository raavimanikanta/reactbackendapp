import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tollywood from "./Tollywood"
import Home from "./Home";
import Technology from "./Technology";
import Transport from "./Transport";

import PageNotFound from "./PageNotFound";
import Fitness from "./Fitness"
import Food from "./Food";
import ViewData from "./ViewData";
  
const AllComponents = () => {
  return (
    <div>
      <Router>
        <Header />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tollywood" element={<Tollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Fitness" element={<Fitness/>} />
          <Route path="/Transport" element={<Transport/>}/>
          <Route path="/tollywood/:id" element={<ViewData/>}/>
          <Route path="/technology/:id" element={<ViewData/>}/>
          <Route path="/Food/:id" element={<ViewData/>}/>
          <Route path="/Fitness/:id" element={<ViewData/>}/>
          <Route path="/Transport/:id" element={<ViewData/>}/>
          <Route path="/Home/:id" element={<ViewData/>}/>
        </Routes>
        
      </Router>
    </div>
  );
};

export default AllComponents;