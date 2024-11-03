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
        <a href="" target="_blank" rel="noopener noreferrer">
          Shaghayegh K.
        </a>
        , is open-sourced on{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
