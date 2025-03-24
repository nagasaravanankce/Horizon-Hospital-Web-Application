import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./ComponentRouter/Routing.tsx";

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
