import React from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Clock, Compass, BookOpen, Bell, Globe, Zap } from "lucide-react";
import "./Features.css";

const FEATURES = [
  {
    id: "prayer-times",
    icon: Clock,
    titleKey: "features.feature1.title",
    descriptionKey: "features.feature1.description",
    iconBg: "#10b981",
    cardBg: "rgba(16, 185, 129, 0.08)",
  },
  {
    id: "qibla",
    icon: Compass,
    titleKey: "features.feature2.title",
    descriptionKey: "features.feature2.description",
    iconBg: "#3b82f6",
    cardBg: "rgba(59, 130, 246, 0.08)",
  },
  {
    id: "quran-hadith",
    icon: BookOpen,
    titleKey: "features.feature3.title",
    descriptionKey: "features.feature3.description",
    iconBg: "#a855f7",
    cardBg: "rgba(168, 85, 247, 0.08)",
  },
  {
    id: "notifications",
    icon: Bell,
    titleKey: "features.feature4.title",
    descriptionKey: "features.feature4.description",
    iconBg: "#f97316",
    cardBg: "rgba(249, 115, 22, 0.08)",
  },
  {
    id: "languages",
    icon: Globe,
    titleKey: "features.feature5.title",
    descriptionKey: "features.feature5.description",
    iconBg: "#14b8a6",
    cardBg: "rgba(20, 184, 166, 0.08)",
  },
  {
    id: "offline",
    icon: Zap,
    titleKey: "features.feature6.title",
    descriptionKey: "features.feature6.description",
    iconBg: "#ec4899",
    cardBg: "rgba(236, 72, 153, 0.08)",
  },
];

const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="features">
      <div className="features-container">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="features-header"
        >
          <h2 className="features-title">
            {t("features.title")}{" "}
            <span className="features-title-gradient">{t("features.titleHighlight")}</span>
          </h2>
          <p className="features-description">
            {t("features.subtitle")}
          </p>
        </m.div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <m.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="feature-card"
              style={{ background: feature.cardBg }}
            >
              <div className="feature-icon" style={{ background: feature.iconBg }}>
                <feature.icon className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">{t(feature.titleKey)}</h3>
              <p className="feature-description">{t(feature.descriptionKey)}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
