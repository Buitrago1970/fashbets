import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/BetPlay-logo.png";
import "./Layout.css";

const Layout = () => {
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="header-top">
          <div className="logo-container">
            <img src={logo} alt="Betplay logo" className="logo" />
          </div>
          <p className="menu-text">Menú</p>
        </div>
        <div className="header-bottom">
          <div className="user-info">
            <p className="user-name">Juan Buitrago</p>
            <p className="session-text">Sesión</p>
            <p className="session-time">{formatTime(sessionTime)}</p>
          </div>
          <div className="extra-info">
            <p className="extra-content">•</p>
            <p className="extra-content">•</p>
            <p className="extra-content">•</p>
          </div>
        </div>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer"></footer>
    </div>
  );
};

export default Layout;
