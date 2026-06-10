import React from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, Mail, ExternalLink } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../constants/storeUrls";
import "./Footer.css";

const LEGAL_LINKS = [
  {
    id: "privacy",
    labelKey: "footer.privacy",
    url: "https://www.myadhanapp.com/public/privacy-policy.html",
  },
  {
    id: "terms",
    labelKey: "footer.terms",
    url: "https://www.myadhanapp.com/public/terms-of-service.html",
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const appLinks = [
    {
      id: "google-play",
      label: t("common.googlePlay"),
      url: PLAY_STORE_URL,
    },
    {
      id: "app-store",
      label: t("common.appStore"),
      url: APP_STORE_URL,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="footer-content"
        >
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img
                  src="/images/icon.png"
                  alt="MyAdhan Logo"
                  className="footer-logo-image"
                />
              </div>
              <span className="footer-logo-text">MyAdhan</span>
            </div>
            <p className="footer-description">
              {t("footer.description")}
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">{t("footer.download")}</h3>
            <ul className="footer-links">
              {appLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="footer-link-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">{t("footer.legal")}</h3>
            <ul className="footer-links">
              {LEGAL_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span>{t(link.labelKey)}</span>
                    <ExternalLink className="footer-link-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">{t("footer.support")}</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:myadhanapp@gmail.com" className="footer-link">
                  <Mail className="footer-link-icon" />
                  <span>myadhanapp@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="footer-bottom"
        >
          <p className="footer-copyright">
            {t("footer.copyright", { year: currentYear })}
          </p>
          <p className="footer-made-with">
            {t("footer.madeWith")} <Heart className="footer-heart" /> {t("footer.forCommunity")}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
