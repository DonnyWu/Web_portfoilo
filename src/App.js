import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Experience.jsx";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experiences from "./components/Experience.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experiences/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
