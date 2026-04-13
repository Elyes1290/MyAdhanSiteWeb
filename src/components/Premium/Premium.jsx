import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle, Smartphone, ArrowRight } from "lucide-react";
import "./Premium.css";

const Premium = () => {
  const { t } = useTranslation();
  const plans = [
    {
      titleKey: "premium.monthly.title",
      price: "1.99€",
      period: "/mois",
      popular: false,
      available: true,
      planType: "monthly",
    },
    {
      titleKey: "premium.yearly.title",
      price: "19.99€",
      period: "/an",
      popular: true,
      available: true,
      badgeKey: "premium.save",
      planType: "yearly",
    },
    {
      titleKey: "premium.family.title",
      price: "29.99€",
      period: "/an",
      popular: false,
      available: false,
      planType: "family",
    },
  ];

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="premium" className="premium">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="premium-header"
        >
          <h2 className="premium-title">
            {t("premium.title")}{" "}
            <span className="premium-title-gradient">
              {t("premium.titleHighlight")}
            </span>
          </h2>
          <p className="premium-description">{t("premium.subtitle")}</p>
          <div className="premium-info-banner">
            <Smartphone className="banner-icon" />
            <p>{t("premium.infoBanner")}</p>
          </div>
        </motion.div>

        <div className="premium-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`premium-card ${plan.popular ? "popular" : ""} ${
                !plan.available ? "unavailable" : ""
              }`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>{t("premium.popular")}</span>
                </div>
              )}

              {!plan.available && (
                <div className="coming-soon-badge">
                  <span>{t("premium.comingSoon")}</span>
                </div>
              )}

              {plan.badgeKey && plan.available && (
                <div className="save-badge">
                  <span>{t(plan.badgeKey)}</span>
                </div>
              )}

              <div className="premium-card-header">
                <h3 className="premium-card-title">{t(plan.titleKey)}</h3>
                <div className="premium-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              <ul className="premium-features">
                {t(`premium.${plan.planType}.features`, {
                  returnObjects: true,
                }).map((feature, featureIndex) => (
                  <li key={featureIndex} className="premium-feature">
                    <CheckCircle className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.available ? (
                <button
                  className={`premium-btn ${
                    plan.popular ? "primary" : "secondary"
                  }`}
                  onClick={scrollToDownload}
                >
                  <Smartphone className="btn-icon" />
                  <span>{t("premium.downloadApp")}</span>
                  <ArrowRight className="btn-arrow" />
                </button>
              ) : (
                <button className="premium-btn disabled" disabled>
                  <span>{t("premium.comingSoon")}</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
