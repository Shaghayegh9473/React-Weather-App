import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  // let [city, setCity] = useState(null);
  // let [message, setMessage] = useState(false);
  // let [weather, setWeather] = useState({});

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let apiKey = "4b3503b2f08a729413c4d33ef1186004";
  //   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //   axios.get(apiUrl).then(showWeather);
  // }

  // function changeCity(event) {
  //   setCity(event.target.value);
  // }

  // function showWeather(response) {
  //   setMessage(true);
  //   setWeather({
  //     temperature: response.data.main.temp,
  //     description: response.data.weather[0].description,
  //     humidity: response.data.main.humidity,
  //     wind: response.data.wind.speed,
  //     icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  //   });
  // }

  return (
    <form>
      <input
        type="search"
        placeholder="Enter a city..."
        className="searchBox"
      />
      <input type="submit" value="Search" className="searchButton" />
    </form>
  );
}
