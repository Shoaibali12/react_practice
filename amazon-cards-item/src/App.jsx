import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductTab from "./components/ProductTab";

function App() {
  return (
    <center>
      <div>
        <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>;
        <ProductTab />
      </div>
    </center>
  );
}

export default App;
