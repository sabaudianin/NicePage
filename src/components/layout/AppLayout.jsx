import React from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../nav/Navigation";
import { Footer } from "../footer/Footer";

export const AppLayout = () => {
  return (
    <section className="flex justify-center dark:bg-gray-900 dark:text-white">
      <div className="max-w-custom-3xl  ">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </section>
  );
};
