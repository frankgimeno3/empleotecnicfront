import React, { ReactNode, useState } from "react";
import "tailwindcss/tailwind.css";
import Footer from "./Footer/Footer";
import Providers from "./Providers";
import NavbarIn from "./Navbar/NavbarIn";
import NavbarOut from "./Navbar/NavbarOut";

interface LayoutProps {
  children: ReactNode;
  isLoggedIn: boolean; // Agregar la prop isLoggedIn al tipo LayoutProps
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de isLoggedIn

  return (
    <div lang="es">
      <Providers>
        <div className="bg-gray-100 min-h-screen">
          {isLoggedIn ? (
            <NavbarIn handleLogout={() => setIsLoggedIn(false)} /> // Pasar la función handleLogout
          ) : (
            <NavbarOut />
          )}
          <main>{children}</main>
          <Footer />
        </div>
      </Providers>
    </div>
  );
};

export default Layout;