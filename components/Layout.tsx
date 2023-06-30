import React, { ReactNode, useState } from "react";
import "tailwindcss/tailwind.css";
import Footer from "./Footer/Footer";
import Providers from "./Providers";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de isLoggedIn

  return (
    <div lang="es">
      <Providers>
        <div className="bg-gray-100 min-h-screen">
          <main>{children}</main>
          <Footer />
        </div>
      </Providers>
    </div>
  );
};

export default Layout;