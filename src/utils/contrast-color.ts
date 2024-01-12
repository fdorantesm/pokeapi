import { mostReadable } from 'tinycolor2';

export function contrastColor(color: string) {
  const textColor = mostReadable(color, ['#000000', '#ffffff']);
  return textColor.toHexString();
}
