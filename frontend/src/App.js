import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prediction from "./components/Prediction";
import Knowledge from "./components/Knowledge";
import Tips from "./components/Tips";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Prediction />
      <Knowledge />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;