import reactLogo from "./assets/react.svg";
import "./App.css";
import { Adhan } from "adhan.ts";

function App() {
  const Prayer = new Adhan("Egypt");

  // Egypt, Alexandria;
  let latitude = 31.223;
  let longitude = 30.0355;

  const times: {
    fajr: { iso: Date; formatedTime: string };
    sunrise: { iso: Date; formatedTime: string };
    dhuhr: { iso: Date; formatedTime: string };
    asr: { iso: Date; formatedTime: string };
    sunset: { iso: Date; formatedTime: string };
    maghrib: { iso: Date; formatedTime: string };
    isha: { iso: Date; formatedTime: string };
  } = Prayer.getTimes(
    new Date() /* the Date */,
    [latitude, longitude],
    "auto" /* => timezone */
  );

  const geovernoments = (govNum: number) => {
    const govesArr = {
      "01": { ar: "القاهرة", en: "Cairo", lat: "", lng: "" },
      "02": { ar: "الإسكندرية", en: "Alexandria", lat: "", lng: "" },
      "04": { ar: "السويس", en: "Suez", lat: "", lng: "" },
      "11": { ar: "دمياط", en: "Damietta", lat: "", lng: "" },
      "12": { ar: "الدقهلية", en: "Dakahlia", lat: "", lng: "" },
      "13": { ar: "الشرقية", en: "Eastern", lat: "", lng: "" },
      "14": { ar: "القليوبية", en: "Qalyubia", lat: "", lng: "" },
      "15": { ar: "كفر الشيخ", en: "Kafr El-Sheikh", lat: "", lng: "" },
      "16": { ar: "الغربية", en: "western", lat: "", lng: "" },
      "17": { ar: "المنوفية", en: "Menoufia", lat: "", lng: "" },
      "18": { ar: "البحيرة", en: "the lake", lat: "", lng: "" },
      "19": { ar: "الإسماعيلية", en: "Ismailia", lat: "", lng: "" },
      "21": { ar: "الجيزة", en: "Giza", lat: "", lng: "" },
      "22": { ar: "بني سويف", en: "Bani Sweif", lat: "", lng: "" },
      "23": { ar: "الفيوم", en: "Fayoum", lat: "", lng: "" },
      "24": { ar: "المنيا", en: "Minya", lat: "", lng: "" },
      "25": { ar: "أسيوط", en: "Asyut", lat: "", lng: "" },
      "26": { ar: "سوهاج", en: "Sohag", lat: "", lng: "" },
      "27": { ar: "قنا", en: "Qena", lat: "", lng: "" },
      "28": { ar: "أسوان", en: "Aswan", lat: "", lng: "" },
      "29": { ar: "الأقصر", en: "El-Aqsur", lat: "", lng: "" },
      "31": { ar: "البحر الأحمر	", en: "The Red Sea", lat: "", lng: "" },
      "32": { ar: "الوادى الجديد", en: "The new Valley", lat: "", lng: "" },
      "33": { ar: "مطروح", en: "Matrouh", lat: "", lng: "" },
      "34": { ar: "شمال سيناء", en: "North Sinai", lat: "", lng: "" },
      "35": { ar: "جنوب سيناء", en: "South of Sinaa", lat: "", lng: "" },
      "88": {
        ar: "خارج الجمهورية",
        en: "outside the republic",
        lat: "",
        lng: "",
      },
    };
  };

  return (
    <div className="App">
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
            <th scope="row">المحافظة</th>
            <td>
              {times.fajr.iso.toLocaleTimeString("ar-sa", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td>
              {times.dhuhr.iso.toLocaleTimeString("ar-sa", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td>
              {times.asr.iso.toLocaleTimeString("ar-sa", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td>
              {times.maghrib.iso.toLocaleTimeString("ar-sa", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td>
              {times.isha.iso.toLocaleTimeString("ar-sa", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
