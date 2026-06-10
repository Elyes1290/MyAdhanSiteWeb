import React from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle, Smartphone, ArrowRight } from "lucide-react";
import "./Premium.css";

const PLANS = [
  {
    titleKey: "premium.monthly.title",
    priceKey: "premium.monthly.price",
    periodKey: "premium.monthly.period",
    popular: false,
    available: true,
    planType: "monthly",
  },
  {
    titleKey: "premium.yearly.title",
    priceKey: "premium.yearly.price",
    periodKey: "premium.yearly.period",
    popular: true,
    available: true,
    badgeKey: "premium.save",
    planType: "yearly",
  },
  {
    titleKey: "premium.family.title",
    priceKey: "premium.family.price",
    periodKey: "premium.family.period",
    popular: false,
    available: false,
    planType: "family",
  },
];

function scrollToDownload() {
  const downloadSection = document.getElementById("download");
  if (downloadSection) {
    downloadSection.scrollIntoView({ behavior: "smooth" });
  }
}

const Premium = () => {
  const { t } = useTranslation();

  return (
    <section id="premium" className="premium">
      <div className="premium-container">
        <m.div
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
        </m.div>

        <div className="premium-grid">
          {PLANS.map((plan, index) => (
            <m.div
              key={plan.planType}
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
                  <span className="price-amount">{t(plan.priceKey)}</span>
                  <span className="price-period">{t(plan.periodKey)}</span>
                </div>
              </div>

              <ul className="premium-features">
                {t(`premium.${plan.planType}.features`, {
                  returnObjects: true,
                }).map((feature) => (
                  <li key={feature} className="premium-feature">
                    <CheckCircle className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.available ? (
                <button
                  type="button"
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
                <button type="button" className="premium-btn disabled" disabled>
                  <span>{t("premium.comingSoon")}</span>
                </button>
              )}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
