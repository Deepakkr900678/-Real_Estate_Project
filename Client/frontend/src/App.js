import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import Property from "./Components/property/Property";
import Protected from "./Components/Protected/protected";
import BasicInfo from "./Components/Add properties/BasicInfo";
import PropertyDetails from "./Components/Add properties/propertyDetails";
import GeneralInfo from "./Components/Add properties/generalinfo";
import LocationInfo from "./Components/Add properties/locationinfo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route
          path="/"
          element={
            <Protected>
              <Property />
            </Protected>
          }
        ></Route>
        <Route
          path="/basicinfo"
          element={
            <Protected>
              <BasicInfo />
            </Protected>
          }
        ></Route>
        <Route
          path="/propertydeatils"
          element={
            <Protected>
              <PropertyDetails />
            </Protected>
          }
        ></Route>
        <Route
          path="/generalinfo"
          element={
            <Protected>
              <GeneralInfo />
            </Protected>
          }
        ></Route>
        <Route
          path="/locationinfo"
          element={
            <Protected>
              <LocationInfo />
            </Protected>
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
