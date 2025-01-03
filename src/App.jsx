import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { Home } from "./home/Home";
import { About } from "./about/About.jsx";

export const App = () => {
  console.log("App component rendered");
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
