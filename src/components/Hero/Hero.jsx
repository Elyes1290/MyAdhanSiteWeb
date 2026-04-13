import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Download,
  Play,
  ArrowRight,
  Sparkles,
  Globe,
  Bell,
  X,
} from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
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
            <img
              src="/images/icon.png"
              alt="MyAdhan Logo"
              className="hero-logo-image"
            />
          </div>

          <h1 className="hero-title">
            {t("hero.title")}{" "}
            <span className="hero-title-gradient">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="hero-description">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-buttons"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.drogbinho.prayertimesapp2&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            <Download className="btn-icon" />
            <span>{t("hero.downloadBtn")}</span>
            <ArrowRight className="btn-arrow" />
          </a>
          <button
            className="hero-btn-secondary"
            onClick={() => setShowVideo(true)}
          >
            <Play className="btn-icon" />
            <span>{t("hero.learnMoreBtn")}</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-stats"
        >
          <div className="stat-item">
            <div className="stat-icon">
              <Globe className="stat-icon-svg" />
            </div>
            <span className="stat-text">{t("hero.stats.languages")}</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Bell className="stat-icon-svg" />
            </div>
            <span className="stat-text">{t("hero.stats.prayers")}</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Sparkles className="stat-icon-svg" />
            </div>
            <span className="stat-text">{t("hero.stats.free")}</span>
          </div>
        </motion.div>
      </div>

      {/* Modal Vidéo */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video-modal-overlay"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setShowVideo(false)}
            >
              <X size={24} />
            </button>
            <video
              className="video-player"
              controls
              autoPlay
              muted
              src="/videos/presentation_app.mp4"
            >
              {t("hero.videoNotSupported")}
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
