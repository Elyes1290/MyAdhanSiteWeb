import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import PremiumFeatures from "./components/PremiumFeatures";
import Premium from "./components/Premium";
import DownloadSection from "./components/Download";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Features />
      <Screenshots />
      <PremiumFeatures />
      <Premium />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
