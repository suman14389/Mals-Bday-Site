import React from "react";
import "../Styles/header.css";

const  Header = ({tabNames, currentTabIndex, handleTabChange}) => {
   return <div className="header">
        <div>
        Icon
        </div>
        <div className="tab-list">
            {
            tabNames.map((tab, index) => <p className="tab-item" onClick={() => handleTabChange(index)}> {tab}</p>)
            }
        </div>
   </div>
}

export default Header;