// src/App.js
import React from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ScrollProvider } from "./context/ScrollContext";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./components/Home"; // Import the Home component
import "./App.css";

function App() {
  return (
    <DarkModeProvider>
      <ScrollProvider>
        <div className="App">
          <Navbar /> {/* Render the Navbar */}
          <Home /> {/* Render the Home component */}
        </div>
      </ScrollProvider>
    </DarkModeProvider>
  );
}

export default App;
