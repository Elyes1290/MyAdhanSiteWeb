import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import "./Navigation.css";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "features", label: t("nav.features") },
    { id: "screenshots", label: t("nav.screenshots") },
    { id: "premium", label: t("nav.premium") },
    { id: "download", label: t("nav.download") },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo"
        >
          <div className="logo-icon">
            <img
              src="/images/icon.png"
              alt="MyAdhan Logo"
              className="logo-image"
            />
          </div>
          <span className="logo-text">MyAdhan</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="nav-mobile-actions">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-mobile-toggle"
          >
            {isMenuOpen ? (
              <X className="mobile-icon" />
            ) : (
              <Menu className="mobile-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="nav-mobile"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-mobile-link"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
