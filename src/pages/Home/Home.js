import React from "react";
import home from "../../assets/home.png";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-img">
        <img src={home} alt="logo" />
      </div>
    </>
  );
}
