import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { LANGUAGES, normalizeLanguageCode } from "../../constants/languages";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const activeCode = normalizeLanguageCode(i18n.language);
  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === activeCode) || LANGUAGES[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        type="button"
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("common.changeLanguage")}
        aria-expanded={isOpen}
      >
        <Globe className="language-icon" />
        <span className="language-name">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="language-overlay"
            onClick={() => setIsOpen(false)}
            aria-label={t("common.close", "Close")}
          />
          <div className="language-dropdown" aria-label={t("common.changeLanguage")}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                aria-current={activeCode === lang.code ? "true" : undefined}
                className={`language-option ${activeCode === lang.code ? "active" : ""}`}
                onClick={() => changeLanguage(lang.code)}
              >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-label">{lang.name}</span>
                {activeCode === lang.code && (
                  <Check className="language-check" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
