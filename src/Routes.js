import React from "react";
import Addnotes from "pages/Addnotes";
import Account from "pages/Account";
import Contacts from "pages/Contacts";
import Dashboard from "pages/Dashboard";
import Products from "pages/Products";
import Tasks from "pages/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addnotes" element={<Addnotes />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
