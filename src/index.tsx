import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LogInAsAClient } from "./screens/LogInAsAClient";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LogInAsAClient />
  </StrictMode>,
);
