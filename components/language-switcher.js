"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import Select from "./select";

export default function LanguageSwitcher() {
  const { language, changeLanguage, t } = useLanguage();

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select" className="sr-only">
        {t("common.language_switcher")}
      </label>
      <Select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
        className="p-2 border rounded-md"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </Select>
    </div>
  );
}
