import React from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Smartphone, Download } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../constants/storeUrls";
import "./FinalCTA.css";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section id="download" className="fcta-section">
      <div className="fcta-glow" />
      <div className="fcta-container">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fcta-content"
        >
          <div className="fcta-icon" aria-hidden="true">🕌</div>

          <h2 className="fcta-title">{t("finalCta.title")}</h2>
          <p className="fcta-subtitle">{t("finalCta.subtitle")}</p>

          <div className="fcta-buttons">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fcta-btn fcta-btn-ios"
            >
              <Smartphone className="fcta-btn-icon" />
              <div className="fcta-btn-text">
                <span className="fcta-btn-sub">{t("finalCta.availableOn")}</span>
                <span className="fcta-btn-name">{t("finalCta.appStore")}</span>
              </div>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fcta-btn fcta-btn-android"
            >
              <Download className="fcta-btn-icon" />
              <div className="fcta-btn-text">
                <span className="fcta-btn-sub">{t("finalCta.getItOn")}</span>
                <span className="fcta-btn-name">{t("finalCta.googlePlay")}</span>
              </div>
            </a>
          </div>

          <p className="fcta-note">{t("finalCta.note")}</p>
        </m.div>
      </div>
    </section>
  );
};

export default FinalCTA;
