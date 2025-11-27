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
    const keys = key.split(".");
    let result = translations[language];
    for (let i = 0; i < keys.length; i++) {
      if (result && result[keys[i]] !== undefined) {
        result = result[keys[i]];
      } else {
        return key; // Return the key if translation not found
      }
    }
    return result;
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
