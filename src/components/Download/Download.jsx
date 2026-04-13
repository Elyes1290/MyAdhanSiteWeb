import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Download as DownloadIcon,
  ArrowRight,
  Globe,
  Award,
  Smartphone,
  Bell,
} from "lucide-react";
import "./Download.css";

const DownloadSection = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: Globe,
      number: "13",
      labelKey: "download.stats.languages",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Bell,
      number: "5",
      labelKey: "download.stats.notifications",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Award,
      numberKey: "download.stats.freeNumber",
      labelKey: "download.stats.free",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Smartphone,
      number: "24/7",
      labelKey: "download.stats.available",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="download" className="download">
      <div className="download-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="download-header"
        >
          <h2 className="download-title">
            {t("download.title")}{" "}
            <span className="download-title-gradient">
              {t("download.titleHighlight")}
            </span>
          </h2>
          <p className="download-description">{t("download.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="download-buttons"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.drogbinho.prayertimesapp2&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn-primary"
          >
            <DownloadIcon className="btn-icon" />
            <span>{t("download.googlePlay")}</span>
            <ArrowRight className="btn-arrow" />
          </a>
          <a
            href="https://apps.apple.com/ch/app/myadhan-muslim-prayer-app/id6756371160?l=fr-FR"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn-primary"
          >
            <Smartphone className="btn-icon" />
            <span>{t("download.appStore")}</span>
            <ArrowRight className="btn-arrow" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="download-stats"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                <stat.icon className="stat-icon-svg" />
              </div>
              <div className="stat-number">
                {stat.numberKey ? t(stat.numberKey) : stat.number}
              </div>
              <div className="stat-label">{t(stat.labelKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
