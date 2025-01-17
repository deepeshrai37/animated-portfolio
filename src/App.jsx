import "./App.scss"
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
const App = () => {
  return <div>
    <section id="Home">
      <Navbar></Navbar>
      <Hero/>
      
    </section>
    <section id="Portfolio"><Parallax type="skills"/></section>
    <section><Skills/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    </div>;
};

export default App;
