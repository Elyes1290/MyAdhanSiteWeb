import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Clock, Compass, BookOpen, Bell, Globe, Zap } from "lucide-react";
import "./Features.css";

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Clock,
      titleKey: "features.feature1.title",
      descriptionKey: "features.feature1.description",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-400/10",
    },
    {
      icon: Compass,
      titleKey: "features.feature2.title",
      descriptionKey: "features.feature2.description",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: BookOpen,
      titleKey: "features.feature3.title",
      descriptionKey: "features.feature3.description",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Bell,
      titleKey: "features.feature4.title",
      descriptionKey: "features.feature4.description",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-400/10",
    },
    {
      icon: Globe,
      titleKey: "features.feature5.title",
      descriptionKey: "features.feature5.description",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-400/10",
    },
    {
      icon: Zap,
      titleKey: "features.feature6.title",
      descriptionKey: "features.feature6.description",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-400/10",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <motion.div
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
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`feature-card ${feature.bgColor}`}
            >
              <div className={`feature-icon ${feature.color}`}>
                <feature.icon className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">{t(feature.titleKey)}</h3>
              <p className="feature-description">{t(feature.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
