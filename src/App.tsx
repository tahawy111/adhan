import reactLogo from "./assets/react.svg";
import "./App.css";
import { Adhan } from "adhan.ts";
import { useState, useEffect } from "react";
import PrayDates from "./components/PrayDates";

function App() {
  const mainDate = new Date();
  const monthList = [
    { hijri: "محرم", ar: `يـنايـر`, en: "January" },
    { hijri: "صفر", ar: `فـبرايـر`, en: "February" },
    { hijri: "ربيع الأول", ar: `مـارس`, en: "March" },
    { hijri: "ربيع الآخر", ar: `أبـريـل`, en: "April" },
    { hijri: "جمادى الأولى", ar: `مـايـو`, en: "May" },
    { hijri: "جمادى الآخرة", ar: `يـونـيـو`, en: "June" },
    { hijri: "رجب", ar: `يـولـيـو`, en: "July" },
    { hijri: "شعبان", ar: `أغـسـطـس`, en: "August" },
    { hijri: "رمضان", ar: `سبـتـمبر`, en: "September" },
    { hijri: "شوال", ar: `أكـتـوبر`, en: "October" },
    { hijri: "ذو القعدة", ar: `نـوفمبـر`, en: "November" },
    { hijri: "ذو الحجة", ar: `ديـسـمـبر`, en: "December" },
  ];

  const daysList = [
    { ar: `الأحد`, en: "Sunday" },
    { ar: `الأثنين`, en: "Monday" },
    { ar: `الثلاثاء`, en: "Tuesday" },
    { ar: `الاربعاء`, en: "Wednesday" },
    { ar: `الخميس`, en: "Thursday" },
    { ar: `الجمعة`, en: "Friday" },
    { ar: `السبت`, en: "Saturday" },
  ];

  let hijri = new Intl.DateTimeFormat("ar-SA-u-nu-latn");
  const hijriDay = hijri.format(mainDate).slice(0, 1);
  console.log(hijriDay);

  return (
    <div className="App">
      <h1 className="text-danger mb-5">مواقيت الصلاة</h1>
      <div className="dates border border-3 border-dark rounded-3 d-flex justify-content-between">
        <div className="left d-flex flex-column justify-content-center fw-bold">
          <div className="fs-3">{hijri.format(mainDate)}</div>
        </div>
        <div className="center d-flex flex-column justify-content-center fw-bold">
          <div className="fs-3">{daysList[mainDate.getDay()].ar}</div>
          <div className="fs-5">
            {daysList[mainDate.getDay()].en.toUpperCase()}
          </div>
          <div className="fs-4">{mainDate.getDate()}</div>
          <div className="fs-6">
            {monthList[mainDate.getMonth()].en.toUpperCase() + " "}
            {mainDate.getFullYear()}
          </div>
          <div className="border-2 border-dark border-top p-1 d-flex justify-content-center align-items-center">
            TEST
          </div>
        </div>
        <div className="right d-flex flex-column justify-content-center fw-bold">
          <div className="fs-lg">
            {mainDate.getDate().toLocaleString("ar-eg")}
          </div>
          <div className="fs-1">{monthList[mainDate.getMonth()].ar}</div>
          <div className="fs-3 mt-3">
            {mainDate.getFullYear().toLocaleString("ar-eg").replace("٬", "")}
          </div>
        </div>
      </div>
      <PrayDates />
    </div>
  );
}

export default App;
