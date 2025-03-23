// src/App.js
import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./components/Home"; // Import the Home component

function App() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar */}
      <Home /> {/* Render the Home component */}
    </div>
  );
}

export default App;
