import Expiernce from "./Components/Expierence";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
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
      </div>
    </>
  );
}

export default App;
