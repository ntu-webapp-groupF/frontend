import React, { useState } from 'react';
import { BrowserRouter, Redirect, useRouteMatch, Routes, Route  } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header1 from './Header/Header1.jsx';
import Footer1 from './Footer/Footer1.jsx';
import Container1 from './Container/Container1.jsx';
import Login from './Header/Login.jsx'; 
import MyList from './Header/MyList.jsx'; 
import SignUp from './Header/SignUp.jsx';
import MemberShip from './Header/MemberShip.jsx';
import UserSwitch from './Header/UserSwith.jsx';
import Example from './Container/Example.jsx';
import ThreeD from './Header/ThreeD.jsx';
import Upload from './Header/Upload.jsx';



import './App.css';

function App() {
  return (
    <div className="wrapper" >
      <Header1 />

      <Routes>
        <Route path="/Container1" element={<Container1 />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MemberShip" element={<MemberShip />} />
        <Route path="/UserSwith" element={<UserSwitch />} />
        <Route path="/Example" element={<Example />} />
        <Route path="/ThreeD" element={<ThreeD />} />
        <Route path="/ThreeD" element={<ThreeD />} />
        {/* 其他路由 */}
        <Route path="/Upload" element={<Upload />} />
      </Routes>

      <Footer1 />
    </div>
  );
}

export default App;
