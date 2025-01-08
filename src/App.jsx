import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout.jsx";
import { Home } from "./components/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { Tickets } from "./pages/tickets/Tickets.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="/tickets"
            element={<Tickets />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
