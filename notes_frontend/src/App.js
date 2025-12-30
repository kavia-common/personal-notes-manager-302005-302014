import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import AppRoutes from "./routes/AppRoutes";

// PUBLIC_INTERFACE
function App() {
  /** App shell entry point: top navigation + route outlet. */
  return (
    <div className="App">
      <TopNav />
      <AppRoutes />
    </div>
  );
}

export default App;
