import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold ">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <SocialLink/>
      </h1>
    </div>
  );
}

export default App;
