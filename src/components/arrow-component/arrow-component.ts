import { createElement } from "../../utils/html-utils";

import styles from "./arrow-component.module.scss";
import { Direction } from "../../types";

const arrowIcon = `<svg fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <path d="M133 231a8 8 0 0 1-5-7v-40H48a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80V32a8 8 0 0 1 14-6l96 96a8 8 0 0 1 0 12l-96 96a8 8 0 0 1-9 1Z"/>
</svg>`;

export const cssClassByDirection: Record<Direction, string> = {
  [Direction.UP]: styles.up,
  [Direction.DOWN]: styles.down,
  [Direction.LEFT]: styles.left,
  [Direction.RIGHT]: styles.right,
};

export function getArrowComponent(direction: Direction): HTMLElement {
  const arrow = createElement({
    cssClass: `${styles.arrow} ${cssClassByDirection[direction]}`,
  });

  arrow.innerHTML = arrowIcon;

  return arrow;
}

export function updateArrowComponent(arrow: HTMLElement, direction: Direction) {
  arrow.classList.remove(...Object.values(cssClassByDirection));
  arrow.classList.add(cssClassByDirection[direction]);
}

export { styles };
