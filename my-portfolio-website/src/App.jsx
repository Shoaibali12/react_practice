import Contact from "./Components/Contact";
import Expiernce from "./Components/Expierence";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Work from "./Components/Work";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Intro />
        <Services />
        <Expiernce />
        <Work />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
