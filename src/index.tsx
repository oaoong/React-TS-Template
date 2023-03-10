import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Render application in DOM
const root = document.getElementById("app");
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error(`[ERWT] : Could not find root element`);
}
