import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import Button from "./components/Button";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Button /> */}
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer/>
      


    </div>
  );
}

export default App;
