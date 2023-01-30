import reactLogo from "./assets/react.svg";
import "./App.css";
import { Adhan } from "adhan.ts";
import { useState, useEffect } from "react";
import PrayDates from "./components/PrayDates";

function App() {
  const mainDate = new Date();

  return (
    <div className="App">
      <h1 className="text-danger mb-5">مواقيت الصلاة</h1>
      <div className="dates border border-3 border-dark rounded-3 d-flex justify-content-between">
        <div className="left"></div>
        <div className="center"></div>
        <div className="right d-flex justify-content-center">
          <div className="fs-lg">{mainDate.getDate()}</div>
        </div>
      </div>
      <PrayDates />
    </div>
  );
}

export default App;
