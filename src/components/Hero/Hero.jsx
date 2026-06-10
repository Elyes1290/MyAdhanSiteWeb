import React, { useState } from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Globe, Bell, X, Smartphone, Download, Play } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../constants/storeUrls";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const pills = t("hero.pills", { returnObjects: true });

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-badge">
            <Sparkles className="badge-icon" />
            <span>{t("hero.badge")}</span>
          </div>

          <div className="hero-logo">
            <img src="/images/icon.png" alt="MyAdhan Logo" className="hero-logo-image" />
          </div>

          <h1 className="hero-title">
            {t("hero.title")}{" "}
            <span className="hero-title-gradient">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="hero-tagline">{t("hero.tagline")}</p>

          <p className="hero-description">{t("hero.subtitle")}</p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-pills"
          >
            {pills.map((pill) => (
              <span key={pill} className="hero-pill">
                <span className="hero-pill-check">✓</span>
                {pill}
              </span>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hero-store-badges"
          >
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-badge">
              <Smartphone className="store-badge-icon" />
              <div className="store-badge-text">
                <span className="store-badge-sub">{t("hero.stores.availableOn")}</span>
                <span className="store-badge-name">{t("hero.stores.appStore")}</span>
              </div>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-badge">
              <Download className="store-badge-icon" />
              <div className="store-badge-text">
                <span className="store-badge-sub">{t("hero.stores.getItOn")}</span>
                <span className="store-badge-name">{t("hero.stores.googlePlay")}</span>
              </div>
            </a>
          </m.div>

          <m.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-video-btn"
            onClick={() => setShowVideo(true)}
          >
            <span className="hero-video-play"><Play size={14} /></span>
            {t("hero.watchVideo")}
          </m.button>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-phone-wrapper"
        >
          <m.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hero-phone"
          >
            <div className="phone-glow" />
            <div className="phone-frame">
              <div className="phone-notch" />
              <img
                src="/images/homescreen.jpg"
                alt="MyAdhan App"
                className="phone-screen"
              />
            </div>
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-stats"
        >
          <div className="stat-item">
            <div className="stat-icon"><Globe className="stat-icon-svg" /></div>
            <span className="stat-text">{t("hero.stats.languages")}</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Bell className="stat-icon-svg" /></div>
            <span className="stat-text">{t("hero.stats.prayers")}</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Sparkles className="stat-icon-svg" /></div>
            <span className="stat-text">{t("hero.stats.free")}</span>
          </div>
        </m.div>
      </div>

      {showVideo && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video-modal-overlay"
          onClick={() => setShowVideo(false)}
          role="presentation"
        >
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={t("hero.watchVideo")}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setShowVideo(false)}
              aria-label={t("common.close", "Close")}
            >
              <X size={24} />
            </button>
            <video
              className="video-player"
              controls
              autoPlay
              preload="metadata"
              src="/videos/presentation_app.mp4"
              aria-label={t("hero.watchVideo")}
            >
              <track kind="captions" srcLang="en" label={t("hero.captions", "Captions")} />
            </video>
          </m.div>
        </m.div>
      )}
    </section>
  );
};

export default Hero;
