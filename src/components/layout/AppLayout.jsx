import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../nav/Navigation";
import { Footer } from "../footer/Footer";

export const AppLayout = () => {
  return (
    <section>
      <Navigation />
      <Outlet />
      <Footer />
    </section>
  );
};
