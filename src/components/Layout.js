import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/BetPlay-logo.png";
import home from "../assets/home.svg";
import cards from "../assets/CARDSBET.svg";
import recargas from "../assets/Frame (1).svg";
import retiros from "../assets/Group 2904.svg";
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
          <Link to="/" className="menu-link">
            <div className="logo-container">
              <img src={logo} alt="Betplay logo" className="logo" />
            </div>
            <p className="menu-text">Menú</p>
          </Link>
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
      <footer className="layout-footer footer-container">
        <div className="footer-content">
          <Link to="/" className="footer-link">
            <div className="footer-logo">
              <img src={home} alt="Betplay logo" className="logo-footer" />
            </div>
            <p className="footer-text">Inicio</p>
          </Link>
        </div>

        <div className="footer-content">
          <Link to="/cards" className="footer-link">
            <div className="footer-logo">
              <img src={cards} alt="Betplay logo" className="logo-footer" />
            </div>
            <p className="footer-text">Apuestas</p>
          </Link>
        </div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={recargas} alt="Betplay logo" className="logo-footer" />
          </div>
          <p className="footer-text">Recargas</p>
        </div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={retiros} alt="Betplay logo" className="logo-footer" />
          </div>
          <p className="footer-text">Retiros</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
