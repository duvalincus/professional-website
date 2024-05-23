import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation'
import Resume from './components/Resume';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <>
      <div className="relative">
        <Navigation />
        <Hero />
        <div className="h-[200px]"></div>
        <About />
        <div className="h-[200px]"></div>
        <Resume />
        <div className="h-[200px]"></div>
        <Education />
        <Footer />
      </div>
    </>
  );
}

export default App
