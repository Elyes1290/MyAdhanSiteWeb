import React, { useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import WhyMyAdhan from "./components/WhyMyAdhan/WhyMyAdhan";
import Features from "./components/Features/Features";
import Screenshots from "./components/Screenshots/Screenshots";
import PremiumFeatures from "./components/PremiumFeatures/PremiumFeatures";
import Premium from "./components/Premium/Premium";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import "./App.css";

const RTL_LANGS = ["ar", "ur", "fa"];

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.split("-")[0] ?? "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="app">
        <Navigation />
        <Hero />
        <WhyMyAdhan />
        <Features />
        <Screenshots />
        <PremiumFeatures />
        <Premium />
        <FinalCTA />
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
