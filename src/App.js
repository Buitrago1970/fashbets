import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cards from "./pages/Cards/Cards";
import Success from "./pages/Success/Success";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
