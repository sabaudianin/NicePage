import React from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../nav/Navigation";
import { Footer } from "../footer/Footer";

export const AppLayout = () => {
  return (
    <section className="flex justify-center bg-blue-100">
      <div className="max-w-custom-3xl  ">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </section>
  );
};
