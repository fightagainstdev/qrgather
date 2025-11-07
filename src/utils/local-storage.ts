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

// 完全禁用 localStorage 以避免在 iframe 中的访问错误
export function setLocalStorageItem(key: LocalStorageKey, value: string, postfix?: string) {
  // 完全禁用 localStorage
  return;
}

export function getLocalStorageItem(key: LocalStorageKey, postfix?: string) {
  // 完全禁用 localStorage
  return null;
}

export function removeLocalStorageItem(key: LocalStorageKey, postfix?: string) {
  // 完全禁用 localStorage
  return;
}

export function getArrayFromStorage(key: LocalStorageKey) {
  const item = getLocalStorageItem(key);
  if (!item) {
    return [];
  }

  // @ts-ignore
  return item.split(",").map((v) => (v == +v ? +v : v));
}
