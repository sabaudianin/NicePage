import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

console.log("Root element:", document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
console.log("App rendered");
