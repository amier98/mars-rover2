export type Grid = { height: number; width: number };

export function createPlateu(height: number, width: number) {
  if (height >= 0 && height <= 5 && width >= 0 && width <= 5) {
    return { height: height, width: width };
  }
}
