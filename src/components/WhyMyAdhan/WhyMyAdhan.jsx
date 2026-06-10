import React from "react";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import "./WhyMyAdhan.css";

const WhyMyAdhan = () => {
  const { t } = useTranslation();
  const reasons = t("why.reasons", { returnObjects: true });

  return (
    <section id="why" className="why-section">
      <div className="why-container">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="why-header"
        >
          <h2 className="why-title">
            {t("why.title")}{" "}
            <span className="why-title-gradient">{t("why.titleHighlight")}</span>
          </h2>
          <p className="why-subtitle">{t("why.subtitle")}</p>
        </m.div>

        <m.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="why-list"
        >
          {reasons.map((reason) => (
            <m.li
              key={reason}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="why-item"
            >
              <CheckCircle2 className="why-check" />
              <span>{reason}</span>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
};

export default WhyMyAdhan;
