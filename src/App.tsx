import "./App.css";
import { useState } from "react";
import PrayDates from "./components/PrayDates";
import azkar from "azkar";

function App() {
  const [mainDate, setMainDate] = useState(new Date());
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

  const hijriDay = parseInt(hijri.format(mainDate).split("/")[0]);
  const hijriMonth = parseInt(hijri.format(mainDate).split("/")[1]);
  const hijriYear = parseInt(
    hijri.format(mainDate).split("/")[2].split(" ")[0]
  );
  const copticDate = new Intl.DateTimeFormat("ar", {
    calendar: "coptic",
    dateStyle: "full",
  })
    .format(mainDate)
    .split("،")[1]
    .split(" E")[0]
    .toString()
    .trim();
  const copticDay = parseInt(copticDate.split(" ")[0]);
  const copticMonth = copticDate.split(" ")[1];
  const copticYear = parseInt(copticDate.split(" ")[2]);

  return (
    <div className="App">
      <h1 className="text-danger mb-5">مواقيت الصلاة</h1>

      <div className="mb-3 d-flex h-25">
        <label htmlFor="dateInput" className="form-label">
          أدخل التاريخ الذي تريد الانتقال إليه
        </label>
        <input
          onChange={(e: any) => setMainDate(new Date(e.target.value))}
          type="date"
          className="form-control"
        />
      </div>
      <div className="dates border border-3 border-dark rounded-3 d-flex justify-content-between">
        <div className="left d-flex flex-column justify-content-center fw-bold">
          <div className="fs-1">
            {hijriDay.toLocaleString("ar-eg").replace("٬", "")}
          </div>
          <div className="fs-4">{monthList[hijriMonth - 1].hijri}</div>
          <div className="fs-3">
            {hijriYear.toLocaleString("ar-eg").replace("٬", "")}
          </div>
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
            {copticDay.toLocaleString("ar-eg").replace("٬", "") + " "}
            {copticMonth + " "}
            {copticYear.toLocaleString("ar-eg").replace("٬", "")}
          </div>
        </div>
        <div className="right d-flex flex-column justify-content-center fw-bold">
          <div className="fs-1">
            {mainDate.getDate().toLocaleString("ar-eg")}
          </div>
          <div className="fs-1">{monthList[mainDate.getMonth()].ar}</div>
          <div className="fs-3 mt-3">
            {mainDate.getFullYear().toLocaleString("ar-eg").replace("٬", "")}
          </div>
        </div>
      </div>
      <PrayDates date={mainDate} />

      <div>Copyright by Amer Tahawy {new Date().getFullYear()}</div>
    </div>
  );
}

export default App;
