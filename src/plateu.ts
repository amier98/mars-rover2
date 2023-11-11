export type Grid = { height: number; width: number };

export function createPlateu(height: number, width: number): Grid {
  if (height >= 0 && height <= 5 && width >= 0 && width <= 5)
    return { height: height, width: width };
  else {
    throw new Error("Can not be less than 0 or greater than 5");
  }
}
