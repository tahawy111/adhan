import reactLogo from "./assets/react.svg";
import "./App.css";
import { Adhan } from "adhan.ts";
import { useState, ChangeEvent } from "react";

function App() {
  const Prayer = new Adhan("Egypt");

  // Egypt, Alexandria;
  let latitude = 31.223;
  let longitude = 30.0355;
  interface ITimes {
    fajr: { iso: Date; formatedTime: string };
    sunrise: { iso: Date; formatedTime: string };
    dhuhr: { iso: Date; formatedTime: string };
    asr: { iso: Date; formatedTime: string };
    sunset: { iso: Date; formatedTime: string };
    maghrib: { iso: Date; formatedTime: string };
    isha: { iso: Date; formatedTime: string };
    gov?: string;
  }

  const times: ITimes = Prayer.getTimes(
    new Date() /* the Date */,
    [latitude, longitude],
    "auto" /* => timezone */
  );
  // gov => governoment
  const govPrayTimes = (govNum: string, date?: Date): ITimes => {
    const govesArr: any = {
      "01": { ar: "القاهرة", en: "Cairo", lat: 30.033333, lng: 31.2394 },
      "02": { ar: "الإسكندرية", en: "Alexandria", lat: 31.223, lng: 30.0355 },
      "03": { ar: "بورسعيد", en: "Port Said", lat: 31.25, lng: 32.2833 },
      "04": { ar: "السويس", en: "Suez", lat: 29.9667, lng: 32.5333 },
      "11": { ar: "دمياط", en: "Damietta", lat: 31.4167, lng: 31.8214 },
      "12": { ar: "الدقهلية", en: "Dakahlia", lat: 30.7192, lng: 31.2628 },
      "13": { ar: "الشرقية", en: "Ash Sharqīyah", lat: 30.5667, lng: 31.5 },
      "14": { ar: "القليوبية", en: "Qalyubia", lat: 30.1286, lng: 31.2422 },
      "15": { ar: "كفر الشيخ", en: "Kafr El-Sheikh", lat: 31.1, lng: 30.95 },
      "16": { ar: "الغربية", en: "Al Gharbīyah", lat: 30.9667, lng: 31.1667 },
      "17": { ar: "المنوفية", en: "Menoufia", lat: 30.4667, lng: 30.9333 },
      "18": { ar: "البحيرة", en: "Al Buḩayrah", lat: 31.05, lng: 30.4667 },
      "19": { ar: "الإسماعيلية", en: "Ismailia", lat: 30.5833, lng: 32.2667 },
      "21": { ar: "الجيزة", en: "Giza", lat: 29.987, lng: 31.2118 },
      "22": { ar: "بني سويف", en: "Bani Sweif", lat: 29.0667, lng: 31.0833 },
      "23": { ar: "الفيوم", en: "Fayoum", lat: 29.3, lng: 30.8333 },
      "24": { ar: "المنيا", en: "Minya", lat: 28.0833, lng: 30.75 },
      "25": { ar: "أسيوط", en: "Asyut", lat: 27.1869, lng: 31.1714 },
      "26": { ar: "سوهاج", en: "Sohag", lat: 26.5606, lng: 31.6917 },
      "27": { ar: "قنا", en: "Qena", lat: 26.1667, lng: 32.7167 },
      "28": { ar: "أسوان", en: "Aswan", lat: 24.0889, lng: 32.8997 },
      "29": { ar: "الأقصر", en: "Luxor", lat: 25.6969, lng: 32.6422 },
      "31": {
        ar: "البحر الأحمر",
        en: "The Red Sea",
        lat: 27.2578,
        lng: 33.8117,
      },
      "32": {
        ar: "الوادى الجديد",
        en: "Al Wādī al Jadīd",
        lat: 25.44,
        lng: 30.55,
      },
      "33": { ar: "مطروح", en: "Matrouh", lat: 29.2, lng: 25.5167 },
      "34": {
        ar: "شمال سيناء",
        en: "Shamāl Sīnā’",
        lat: 31.1249,
        lng: 33.8006,
      },
      "35": { ar: "جنوب سيناء", en: "Janūb Sīnā’", lat: 28.2333, lng: 33.6167 },
    };
    const times: ITimes = Prayer.getTimes(
      date || new Date() /* the Date */,
      [govesArr[govNum].lat, govesArr[govNum].lng],
      "auto" /* => timezone */
    );

    return { ...times, gov: govesArr[govNum].ar };
  };
  const [gov, setGov] = useState(null);

  const govOptionList = [
    { num: "01", gov: "القاهرة" },
    { num: "02", gov: "الإسكندرية" },
    { num: "03", gov: "بورسعيد" },
    { num: "04", gov: "السويس" },
    { num: "11", gov: "دمياط" },
    { num: "12", gov: "الدقهلية" },
    { num: "13", gov: "الشرقية" },
    { num: "14", gov: "القليوبية" },
    { num: "15", gov: "كفر الشيخ" },
    { num: "16", gov: "الغربية" },
    { num: "17", gov: "المنوفية" },
    { num: "18", gov: "البحيرة" },
    { num: "19", gov: "الإسماعيلية" },
    { num: "21", gov: "الجيزة" },
    { num: "22", gov: "بني سويف" },
    { num: "23", gov: "الفيوم" },
    { num: "24", gov: "المنيا" },
    { num: "25", gov: "أسيوط" },
    { num: "26", gov: "سوهاج" },
    { num: "27", gov: "قنا" },
    { num: "28", gov: "أسوان" },
    { num: "29", gov: "الأقصر" },
    { num: "31", gov: "البحر الأحمر" },
    { num: "32", gov: "الوادى الجديد" },
    { num: "33", gov: "مطروح" },
    { num: "34", gov: "شمال سيناء" },
    { num: "35", gov: "جنوب سيناء" },
  ];

  return (
    <div className="App">
      <label htmlFor="Default select example">أختر محافظتك</label>
      <select
        className="form-select"
        onChange={({ target }: any) => setGov(target.value)}
        aria-label="Default select example"
      >
        <option selected>اختر محافظتك</option>
        {govOptionList.map(({ gov, num }) => (
          <option value={num}>{gov}</option>
        ))}
      </select>
      <h1 className="text-danger mb-5">مواقيت الصلاة</h1>
      {gov !== null && (
        <table className="table table-bordered" dir="rtl">
          <thead>
            <tr>
              <th>المواقيت</th>
              <th>الفجر</th>
              <th>الظهر</th>
              <th>العصر</th>
              <th>المغرب</th>
              <th>العشاء</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{`${govPrayTimes(gov).gov}`}</th>
              <td>
                {`${govPrayTimes(gov).fajr.iso.toLocaleTimeString("ar-sa", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
              </td>
              <td>
                {`${govPrayTimes(gov).dhuhr.iso.toLocaleTimeString("ar-sa", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
              </td>
              <td>
                {`${govPrayTimes(gov).asr.iso.toLocaleTimeString("ar-sa", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
              </td>
              <td>
                {`${govPrayTimes(gov).maghrib.iso.toLocaleTimeString("ar-sa", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
              </td>
              <td>
                {`${govPrayTimes(gov).isha.iso.toLocaleTimeString("ar-sa", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
