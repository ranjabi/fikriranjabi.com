import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg px-4 pt-6 pb-16">
        {children}
      </div>
    </>
  );
};

export default Layout;
