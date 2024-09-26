import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/success">Success</Link>
          </li>
        </ul>
      </nav>

      <h1>Home</h1>
    </>
  );
}
