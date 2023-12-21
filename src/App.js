import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header"
import Home from './Components/Home';
import Photos from './Components/Photos';
import Videos from './Components/Videos';
import ExtraCurricular from './Components/ExtraCurricular';
import Surprises from './Components/Surprises';
import Others from './Components/Others';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';


function App() {

  const tabNames = ["Home", "Videos", "Photos", "Surprises", "ExtraCurricular", "others"];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  console.log("currentTabIndex", currentTabIndex);

  const handleTabChange = (tabIndex) => {
     setCurrentTabIndex(tabIndex);
  }
  return (
    <div className="app-container">
      <Header tabNames={tabNames} currentTabIndex = {currentTabIndex} handleTabChange={handleTabChange}/>
      <div className='body'>
        <LeftSideBar />
        <div className='main-container'>
            {currentTabIndex ===0 && <Home/>}
            {currentTabIndex ===1 && <Videos/>}
            {currentTabIndex ===2 && <Photos/>}
            {currentTabIndex ===3 && <Surprises/>}
            {currentTabIndex ===4 && <ExtraCurricular/>}
            {currentTabIndex ===5 && <Others/>}
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
