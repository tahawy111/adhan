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

  return (
    <div className="App">
      <table className="table" dir="rtl">
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
            <td>{times.fajr.iso.toLocaleTimeString("ar-EG")}</td>
            <td>{times.dhuhr.iso.toLocaleTimeString("ar-EG")}</td>
            <td>{times.asr.iso.toLocaleTimeString("ar-EG")}</td>
            <td>{times.maghrib.iso.toLocaleTimeString("ar-EG")}</td>
            <td>{times.isha.iso.toLocaleTimeString("ar-EG")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
