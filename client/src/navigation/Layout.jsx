import React from "react";
import { Outlet } from "react-router-dom";
import ContactsList from "../components/ContactsList";

const Layout = () => {
  return (
    <div className="background">
      <div className="contacts-container">
        <ContactsList />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
