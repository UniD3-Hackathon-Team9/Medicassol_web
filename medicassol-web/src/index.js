import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import PatientList from "./PatientList";
import Page1 from "./Page1";
import Page2 from "./Page2";
import FinalComponent from "./FinalComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div>
      <FinalComponent />
    </div>
  </React.StrictMode>
);
