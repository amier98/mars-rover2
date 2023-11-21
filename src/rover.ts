import { Grid } from "./plateu";

type roverInstruction = "L" | "R" | "M";
type orientation = "N" | "E" | "W" | "S";

export type Rover = {
  x: number;
  y: number;
  direction: orientation;
};

export function roverPosition(
  plateu: Grid,
  x: number,
  y: number,
  direction: orientation
) {
  if (x >= 0 && y >= 0 && x <= plateu.width && y <= plateu.height) {
    return { plateu: plateu, x: x, y: y, direction: direction };
  } else {
    throw new Error("invalid");
  }
}
