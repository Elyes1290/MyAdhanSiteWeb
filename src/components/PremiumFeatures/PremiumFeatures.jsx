import React from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Crown,
  BarChart3,
  Headphones,
  BookOpenText,
  WifiOff,
  CloudUpload,
  Heart,
  ArrowRight,
} from "lucide-react";
import "./PremiumFeatures.css";

const FEATURES = [
  { icon: Headphones, key: "audio", color: "#f59e0b" },
  { icon: BookOpenText, key: "widget", color: "#3b82f6" },
  { icon: WifiOff, key: "offline", color: "#10b981" },
  { icon: CloudUpload, key: "backup", color: "#8b5cf6" },
  { icon: BarChart3, key: "stats", color: "#f43f5e" },
  { icon: Heart, key: "content", color: "#ec4899" },
];

function scrollToPricing() {
  const section = document.getElementById("premium");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

const PremiumFeatures = () => {
  const { t } = useTranslation();

  return (
    <section id="premium-features" className="pf-section">
      <div className="pf-container">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pf-header"
        >
          <div className="pf-badge">
            <Crown className="pf-badge-icon" />
            <span>{t("common.premiumBadge")}</span>
          </div>
          <h2 className="pf-title">
            {t("premiumFeatures.title")}{" "}
            <span className="pf-title-gradient">
              {t("premiumFeatures.titleHighlight")}
            </span>
          </h2>
          <p className="pf-subtitle">{t("premiumFeatures.subtitle")}</p>
        </m.div>

        <div className="pf-grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
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
              </m.div>
            );
          })}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pf-cta"
        >
          <button type="button" className="pf-cta-btn" onClick={scrollToPricing}>
            <Crown className="pf-cta-icon" />
            <span>{t("premiumFeatures.cta")}</span>
            <ArrowRight className="pf-cta-arrow" />
          </button>
          <p className="pf-cta-note">{t("premiumFeatures.ctaNote")}</p>
        </m.div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
