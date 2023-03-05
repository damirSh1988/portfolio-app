
import './App.css';
import Header from './ComponentHeader/Header.js';
import Promo from './ComponentPromo/Promo.js';
import About from './ComponentAbout/About.js';
import Experience from './ExperienceComponent/Experience.js';
import Projects from './ComponentProjects/Projects.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <About/>
      <Experience/>
      <Projects/>
       {/*
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
