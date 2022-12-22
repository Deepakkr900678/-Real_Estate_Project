import React from "react";
import { Routes, Route } from "react-router-dom";
import Property from "./Components/property/Property";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Property/>}></Route>
      </Routes>
    </>
  );
}

export default App;
