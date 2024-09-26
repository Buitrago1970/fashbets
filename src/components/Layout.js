// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Mi Aplicación</h1>
        {/* Aquí puedes agregar más elementos del encabezado */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 Mi Aplicación</p>
        {/* Aquí puedes agregar más elementos del pie de página */}
      </footer>
    </div>
  );
};

export default Layout;
