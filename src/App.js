import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Particles from "react-particles-js";
import { BrowserRouter, Route, router, Switch } from "react-router-dom";
import About from "./Components/about";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Contact from "./Components/contact";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 20,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <div className="all">
        <Header />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
