import { defineEnum } from "./enums";

const LOCAL_STORAGE_PREFIX = "mxlle13";

export type LocalStorageKey = defineEnum<typeof LocalStorageKey>;
export const LocalStorageKey = defineEnum({
  MUTED: "m",
  ONBOARDING_STEP: "o",
  SOUND: "s",
  KNOWN_CONFIG_ELEMENTS: "k",
  XP: "x",
});

export function setLocalStorageItem(key: LocalStorageKey, value: string, postfix?: string) {
  try {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + "." + key + (postfix ? "." + postfix : ""), value);
  } catch (e) {
    // Ignore localStorage errors (e.g., in iframe or private browsing)
    console.warn('localStorage access denied:', e);
  }
}

export function getLocalStorageItem(key: LocalStorageKey, postfix?: string) {
  try {
    return localStorage.getItem(LOCAL_STORAGE_PREFIX + "." + key + (postfix ? "." + postfix : ""));
  } catch (e) {
    // Ignore localStorage errors (e.g., in iframe or private browsing)
    console.warn('localStorage access denied:', e);
    return null;
  }
}

export function removeLocalStorageItem(key: LocalStorageKey, postfix?: string) {
  try {
    localStorage.removeItem(LOCAL_STORAGE_PREFIX + "." + key + (postfix ? "." + postfix : ""));
  } catch (e) {
    // Ignore localStorage errors (e.g., in iframe or private browsing)
    console.warn('localStorage access denied:', e);
  }
}

export function getArrayFromStorage(key: LocalStorageKey) {
  const item = getLocalStorageItem(key);
  if (!item) {
    return [];
  }

  // @ts-ignore
  return item.split(",").map((v) => (v == +v ? +v : v));
}
