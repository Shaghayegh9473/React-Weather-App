import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <main>
      <div className="d-md-flex">
        <div>
          <h1 className="weatherCity">Tehran</h1>
          <p>
            <span id="time">00:00</span>, <span id="condition">light rain</span>
            <br />
            Humidity: <strong id="humidity">72%</strong>, Wind:
            <strong id="wind-speed">5.14km/h</strong>
          </p>
          {/* let [city, setCity] = useState({});
    let [time, setTime] = useState({});
    let [condition, setCondition] = useState({});
    let [humidity, setHumidity] = useState({});
    let [wind, setWind] = useState({});
    let [icon, setIcon] = useState({});
    let [temperature, setTemperature] = useState({});
    let [date, setDate] = useState({}); */}
        </div>
        <div className="weatherTempContainer">
          <div className="icon">🌧</div>
          <div className="currentTemp">15</div>
          <div className="unit">℃</div>
        </div>
      </div>
    </main>
  );
}
