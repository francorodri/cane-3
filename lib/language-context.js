"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  es: require("../locales/es.json"),
  en: require("../locales/en.json"),
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es"); // Default language

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
