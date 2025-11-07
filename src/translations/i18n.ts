import { getShortLanguageName } from "../utils/language-util";
import { enTranslations } from "./en";
import { getDeTranslationMap } from "./de";
import { zhTranslations } from "./zh";
import { TranslationKey } from "./translationKey";
import { HAS_SHORT_TEXTS } from "../env-utils";

function getTranslationRecords(): Record<TranslationKey, string> {
  const language = getCurrentLanguage();
  
  if (language === "de") {
    return getDeTranslationMap();
  }
  
  if (language === "zh") {
    return zhTranslations;
  }

  return enTranslations;
}

export function getCurrentLanguage() {
  const shortLang = getShortLanguageName(navigator.language);
  
  if (shortLang === "de" && import.meta.env.GERMAN_ENABLED === "true") {
    return "de";
  }
  
  if (shortLang === "zh") {
    return "zh";
  }

  return "en";
}

export function isGermanLanguage() {
  return getCurrentLanguage() === "de";
}

export function getTranslation(key, ...args) {
  const language = getCurrentLanguage();

  document.documentElement.setAttribute("lang", language);

  const translation = getTranslationRecords()[key];

  if (HAS_SHORT_TEXTS) {
    return translation;
  }

  return translation.replace(/\{(\d+)}/g, ([v, i]) => args[i]);
}
