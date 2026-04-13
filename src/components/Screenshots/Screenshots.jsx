import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Crown, X } from "lucide-react";
import "./Screenshots.css";

const Screenshots = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("core");

  const screenshots = {
    core: [
      {
        src: "/images/homescreen.jpg",
        titleKey: "screenshots.core.homescreen",
      },
      {
        src: "/images/prayer screen 1.jpg",
        titleKey: "screenshots.core.prayerTimes",
      },
      {
        src: "/images/prayer screen 2.jpg",
        titleKey: "screenshots.core.weeklyCalendar",
      },
      {
        src: "/images/prayer screen 3.jpg",
        titleKey: "screenshots.core.howToPray",
      },
      {
        src: "/images/widget horaire prière.jpg",
        titleKey: "screenshots.core.prayerWidget",
      },
      { src: "/images/compass 1.jpg", titleKey: "screenshots.core.qibla" },
      { src: "/images/calendar.jpg", titleKey: "screenshots.core.calendar" },
      { src: "/images/bibliotheque.jpg", titleKey: "screenshots.core.library" },
      { src: "/images/more.jpg", titleKey: "screenshots.core.more" },
      { src: "/images/theme sombre.jpg", titleKey: "screenshots.core.darkTheme" },
      { src: "/images/theme dhohr.jpg", titleKey: "screenshots.core.dhohrTheme" },
      { src: "/images/settings.jpg", titleKey: "screenshots.core.settings" },
    ],
    islamic: [
      { src: "/images/coran 1.jpg", titleKey: "screenshots.islamic.quran" },
      {
        src: "/images/coran 2.jpg",
        titleKey: "screenshots.islamic.quranReader",
      },
      { src: "/images/hadith 1.jpg", titleKey: "screenshots.islamic.hadith" },
      {
        src: "/images/hadith 2.jpg",
        titleKey: "screenshots.islamic.hadithBooks",
      },
      {
        src: "/images/prophetes stories.jpg",
        titleKey: "screenshots.islamic.prophetStories",
      },
      {
        src: "/images/dhikr and duaa.jpg",
        titleKey: "screenshots.islamic.dhikr",
      },
      { src: "/images/99 names.jpg", titleKey: "screenshots.islamic.names99" },
      { src: "/images/tasbih.jpg", titleKey: "screenshots.islamic.tasbih" },
    ],
    premium: [
      {
        src: "/images/prayer stats.jpg",
        titleKey: "screenshots.premium.stats",
        isPremium: true,
      },
      {
        src: "/images/compass 2.jpg",
        titleKey: "screenshots.premium.qiblaCustom",
        isPremium: true,
      },
      {
        src: "/images/theme sobh.jpg",
        titleKey: "screenshots.premium.sobhTheme",
        isPremium: true,
      },
      {
        src: "/images/theme maghrib.jpg",
        titleKey: "screenshots.premium.maghribTheme",
        isPremium: true,
      },
      {
        src: "/images/widget lecture coran.jpg",
        titleKey: "screenshots.premium.quranWidget",
        isPremium: true,
      },
      {
        src: "/images/modal lecture coran.jpg",
        titleKey: "screenshots.premium.quranModal",
        isPremium: true,
      },
    ],
  };

  const categories = [
    { id: "core", labelKey: "screenshots.categories.core" },
    { id: "islamic", labelKey: "screenshots.categories.islamic" },
    { id: "premium", labelKey: "screenshots.categories.premium" },
  ];

  const currentScreenshots = screenshots[currentCategory];

  return (
    <section id="screenshots" className="screenshots">
      <div className="screenshots-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="screenshots-header"
        >
          <h2 className="screenshots-title">
            {t("screenshots.title")}{" "}
            <span className="screenshots-title-gradient">
              {t("screenshots.titleHighlight")}
            </span>
          </h2>
          <p className="screenshots-description">{t("screenshots.subtitle")}</p>
        </motion.div>

        {/* Catégories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="screenshots-categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`category-btn ${currentCategory === category.id ? "active" : ""}`}
            >
              {category.id === "premium" && <Crown className="category-icon" />}
              <span>{t(category.labelKey)}</span>
            </button>
          ))}
        </motion.div>

        {/* Grille de screenshots */}
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="screenshots-grid"
        >
          {currentScreenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="screenshot-card"
              onClick={() => setSelectedImage(screenshot)}
            >
              {screenshot.isPremium && (
                <div className="premium-badge-screenshot">
                  <Crown className="badge-icon" />
                  <span>Premium</span>
                </div>
              )}
              <img
                src={screenshot.src}
                alt={t(screenshot.titleKey)}
                className="screenshot-image"
                loading="lazy"
              />
              <div className="screenshot-overlay">
                <p className="screenshot-title">{t(screenshot.titleKey)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal plein écran */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="screenshot-modal"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={t(selectedImage.titleKey)}
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="modal-title">{t(selectedImage.titleKey)}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Screenshots;
