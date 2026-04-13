import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Crown,
  BarChart3,
  Palette,
  Compass,
  Headphones,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import "./PremiumFeatures.css";

const FEATURES = [
  { icon: Palette, key: "themes", gradient: "from-amber-500 to-orange-500", color: "#f59e0b" },
  { icon: BarChart3, key: "stats", gradient: "from-blue-500 to-cyan-500", color: "#3b82f6" },
  { icon: Compass, key: "qibla", gradient: "from-emerald-500 to-teal-500", color: "#10b981" },
  { icon: Headphones, key: "audio", gradient: "from-purple-500 to-violet-500", color: "#8b5cf6" },
  { icon: BookOpen, key: "widget", gradient: "from-rose-500 to-pink-500", color: "#f43f5e" },
];

const PremiumFeatures = () => {
  const { t } = useTranslation();

  const scrollToPricing = () => {
    const section = document.getElementById("premium");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="premium-features" className="pf-section">
      <div className="pf-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pf-header"
        >
          <div className="pf-badge">
            <Crown className="pf-badge-icon" />
            <span>Premium</span>
          </div>
          <h2 className="pf-title">
            {t("premiumFeatures.title")}{" "}
            <span className="pf-title-gradient">
              {t("premiumFeatures.titleHighlight")}
            </span>
          </h2>
          <p className="pf-subtitle">{t("premiumFeatures.subtitle")}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="pf-grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pf-card"
              >
                <div
                  className="pf-icon-wrapper"
                  style={{ "--feature-color": feature.color }}
                >
                  <Icon className="pf-icon" />
                </div>
                <div className="pf-card-content">
                  <h3 className="pf-card-title">
                    {t(`premiumFeatures.features.${feature.key}.title`)}
                  </h3>
                  <p className="pf-card-desc">
                    {t(`premiumFeatures.features.${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pf-cta"
        >
          <button className="pf-cta-btn" onClick={scrollToPricing}>
            <Crown className="pf-cta-icon" />
            <span>{t("premiumFeatures.cta")}</span>
            <ArrowRight className="pf-cta-arrow" />
          </button>
          <p className="pf-cta-note">{t("premiumFeatures.ctaNote")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
