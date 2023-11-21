export type Grid = { width: number; height: number };

export function createPlateu(width: number, height: number): Grid {
  if (width >= 0 && width <= 5 && height >= 0 && height <= 5)
    return { width: width, height: height };
  else {
    throw new Error("Can not be less than 0 or greater than 5");
  }
}
