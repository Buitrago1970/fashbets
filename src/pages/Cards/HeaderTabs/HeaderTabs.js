import React from "react";
import "./HeaderTabs.css";

function HeaderTabs({ selectedTab, setSelectedTab }) {
  return (
    <div className="header-tabs">
      {["Siguiendo", "Recomendado", "En vivo"].map((tab) => (
        <div
          key={tab}
          className={`tab-item ${selectedTab === tab ? "active" : ""}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
          {selectedTab === tab && <div className="active-line" />}
        </div>
      ))}
    </div>
  );
}

export default HeaderTabs;
