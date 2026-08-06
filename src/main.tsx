import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import App from "./App";
import "./styles/main.scss";

function Root() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
