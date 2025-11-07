import { CatId, KittenId } from "../../logic/data/catId";
import { createElement } from "../../utils/html-utils";
import { CssClass } from "../../utils/css-class";

import styles from "./cat-component.module.scss";
import { isMom } from "../../logic/data/cats";
import { sleep } from "../../utils/promise-utils";
import { hasSoundForAction, playSoundForAction, speak } from "../../audio/sound-control/sound-control";
import { Tool } from "../../types";
import { HAS_KITTEN_MEOWS, HAS_MEOW, HAS_SPOKEN_MEOW } from "../../env-utils";

const catSvg = `<svg xmlns="http://www.w3.org/2000/svg" color="#ff2ea6" viewBox="0 0 500 500">
  <path d="M340 25c-24 10-21 53-49 50-23-6-46-5-68 1-23-6-17-47-42-47-12 16-10 38-17 56-7 33-20 69-5 102 5 19 26 30 30 47-5 23-25 39-31 62-10 22-17 45-24 68-28-13-51-41-48-73-4-23 27-35 24-58-20-16-47 15-55 34-19 51 10 111 56 137 21 8 26 31 34 49 15 20 43 22 66 20 44-2 90 3 134-3 32-12 42-51 38-81-4-57-27-109-54-158 18-20 39-41 40-70 3-42-15-81-21-122-2-5-4-10-8-14Z"/>
  <path d="m378 157 64-14 1 6-63 14zM378 170l67 3v5l-67-3zM145 157l-64-13-2 4 65 14zM144 170l-66 3v5l66-3z"/>
  <ellipse cx="312" cy="145" fill="currentColor" rx="28" ry="22"/>
  <ellipse cx="312" cy="145.1" rx="7" ry="19"/>
  <ellipse cx="216" cy="145" fill="currentColor" rx="28" ry="22"/>
  <ellipse cx="216" cy="145.1" rx="7" ry="19"/>
</svg>`;

export { styles };

const MOM_PLAYBACK_RATE = 1;

const playbackRateMap: Record<CatId, number> = {
  [CatId.MOTHER]: MOM_PLAYBACK_RATE,
  [CatId.MOONY]: MOM_PLAYBACK_RATE * 1.6,
  [CatId.IVY]: MOM_PLAYBACK_RATE * 1.2,
  [CatId.SPLASHY]: MOM_PLAYBACK_RATE * 1.4,
};

const pitchMap: Record<CatId, number> = {
  [CatId.MOTHER]: 1.7,
  [CatId.MOONY]: 2,
  [CatId.IVY]: 1.8,
  [CatId.SPLASHY]: 1.9,
};

export function createCatElement(catId: CatId): HTMLElement {
  return createElement(
    {
      cssClass: CssClass.CAT_BOX,
      ...(HAS_MEOW
        ? {
            onClick: () => {
              void meow(catId);
            },
          }
        : {}),
    },
    [
      createElement({
        cssClass: [styles.cat, isMom(catId) && styles.isMom],
        html: catSvg,
      }),
    ],
  );
}

export function meow(catId: CatId): Promise<void> {
  if (!HAS_MEOW) {
    return Promise.resolve();
  }

  if (HAS_SPOKEN_MEOW) {
    return speak("meow", 0.5, pitchMap[catId]);
  }

  return playSoundForAction(Tool.MEOW, playbackRateMap[catId]);
}

export async function kittenMeows(kittens: KittenId[], doubleMeow?: boolean): Promise<void> {
  if (!HAS_KITTEN_MEOWS) {
    return Promise.resolve();
  }

  if (!hasSoundForAction(Tool.MEOW)) return;

  for (const kitten of kittens) {
    await sleep(50);
    void meow(kitten).then(() => doubleMeow && meow(kitten));
  }
}

export function getCatIdClass(catId: CatId): string {
  return {
    [CatId.MOTHER]: styles.isMom,
    [CatId.MOONY]: styles.moony,
    [CatId.IVY]: styles.ivy,
    [CatId.SPLASHY]: styles.splashy,
  }[catId];
}
