import React from "react";
import Addnotes from "pages/Addnotes";
import Account from "pages/Account";
import Contacts from "pages/Contacts";
import Tasks from "pages/Tasks";
import Dashboard from "pages/Dashboard";
import Products from "pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addnotes" element={<Addnotes />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
