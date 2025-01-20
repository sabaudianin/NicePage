import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout.jsx";
import { Home } from "./components/home/Home.jsx";
import { Tickets } from "./pages/tickets/Tickets.jsx";
import { ThemeInitializer } from "./theme/ThemeInitializer.js";
import { NotFound } from "./utils/NotFound.jsx";
import { TicketForm } from "./pages/tickets/TicketForm.jsx";
import { SponsorForm } from "./pages/SponsorForm/SponsorForm.jsx";
import { SpeakerForm } from "./pages/speakerForm/SpeakerForm.jsx";

export const App = () => {
  return (
    <>
      <ThemeInitializer />
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
              path="/buy-ticket"
              element={<TicketForm />}
            />
            <Route
              path="/tickets"
              element={<Tickets />}
            />
            <Route
              path="/sponsors"
              element={<SponsorForm />}
            />
            <Route
              path="/speakers"
              element={<SpeakerForm />}
            />
          </Route>
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
