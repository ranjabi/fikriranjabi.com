import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto max-w-screen-lg px-4 pt-6 pb-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
