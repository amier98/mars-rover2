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

export function processIntruction(instruction: roverInstruction) {
  const currentdirection = "N";

  switch (instruction) {
    case "L":
      moveLeft(currentdirection);
      console.log(moveLeft(currentdirection));
      break;
    case "R":
      moveRight(currentdirection);
      console.log(moveRight(currentdirection));
      break;
    case "M":
      //move
      break;
  }
}

export function moveRight(direction: orientation) {
  switch (direction) {
    case "N":
      direction = "E";
      break;
    case "E":
      direction = "S";
      break;
    case "S":
      direction = "W";
      break;
    case "W":
      direction = "N";
      break;
  }

  return direction;
}

export function moveLeft(direction: orientation) {
  switch (direction) {
    case "N":
      direction = "W";
      break;
    case "W":
      direction = "S";
      break;
    case "S":
      direction = "E";
      break;
    case "E":
      direction = "N";
      break;
  }

  return direction;
}

export function isDirection(input: string): input is roverInstruction {
  return input === "L" || input === "R" || input === "M";
}
