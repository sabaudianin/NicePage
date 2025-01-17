import React from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../nav/Navigation";
import { Footer } from "../footer/Footer";

export const AppLayout = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 dark:text-white ">
      <div className="flex flex-col justify-center bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen container mx-auto px-4 max-w-custom-3xl">
        <Navigation />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </section>
  );
};
