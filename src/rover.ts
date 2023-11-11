import { Grid } from "./plateu";

type roverInstruction = "L" | "R" | "M";
type orientation = "N" | "E" | "S" | "W";

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
  if (x >= 0 && y >= 0 && x <= plateu.height && y <= plateu.width) {
    return { plateu: plateu, x: x, y: y, direction: direction };
  } else {
    throw new Error("invalid");
  }
}

export function moveRight(direction: orientation) {
  return direction;
}

export function isDirection(input: string): input is roverInstruction {
  return input === "L" || input === "R" || input === "M";
}
