"use client"

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";

const languages = [
    { code: "ru", label: "Rosyjski", flag: "🇷🇺" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
    { code: "en", label: "Angielski", flag: "🇬🇧" },
    // { code: "uk", label: "Українська", flag: "🇺🇦" },
    //{ code: "be", label: "Беларуская", flag: "🇧🇾" },

];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language || "pl");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLanguageChange = (lang: string) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang);
        setIsDropdownOpen(false); // Закрываем меню после выбора
    };

    return (
        <div className="language-selector">
            <button
                className="language-button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                {languages.find((lang) => lang.code === selectedLang)?.flag}
            </button>
            {isDropdownOpen && (
                <div className="language-options">
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className="language-option"
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className="language-flag">{lang.flag}</span>
                            <span className="language-label">{lang.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
