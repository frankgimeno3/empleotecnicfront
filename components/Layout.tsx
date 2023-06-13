import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main >
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;