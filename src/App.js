import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experiences from "./components/Experience.jsx";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experiences/>
      <Work />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
