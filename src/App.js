import Header from "./Header";
import Form from "./Form";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://mellifluous-zabaione-a90532.netlify.app/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shaghayegh K.
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/Shaghayegh9473/React-Weather-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://aesthetic-rabanadas-bf5227.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
