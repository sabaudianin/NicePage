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
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

export const App = () => {
  const testFirestoreConnection = async () => {
    try {
      const colRef = collection(db, "newsletter"); // podaj istniejącą kolekcję
      const snapshot = await getDocs(colRef);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Firestore connection successful. Data:", data);
    } catch (error) {
      console.error("Error connecting to Firestore:", error);
    }
  };

  testFirestoreConnection();
  console.log("Firebase config from env:", {
    apiKey: process.env.REACT_APP_API_KEY,
    projectId: process.env.REACT_APP_PROJECT_ID,
  });
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
