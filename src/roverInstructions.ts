import { Grid } from "./plateu";

type roverInstruction = "L" | "R" | "M";
type orientation = "N" | "E" | "W" | "S";

export type Rover = {
  x: number;
  y: number;
  direction: orientation;
};
export function processInstruction(
  rover: Rover,
  instruction: roverInstruction[],
  plateu: Grid
) {
  for (const instruct of instruction) {
    switch (instruct) {
      case "L":
        moveLeft(rover);
        break;
      case "R":
        moveRight(rover);
        break;
      case "M":
        move(rover, plateu);
        break;
    }
  }
}

export function moveRight(rover: Rover) {
  const { direction } = rover;
  switch (direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  return rover;
}

export function moveLeft(rover: Rover) {
  const { direction } = rover;
  switch (direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  return rover;
}

export function move(place: Rover, plateu: Grid) {
  const { x, y } = place;

  switch (place.direction) {
    case "N":
      if (place.y + 1 <= plateu.height) {
        place.y++;
      } else {
        throw new Error("Out of bounds");
      }
      break;
    case "E":
      if (place.x + 1 <= plateu.width) {
        place.x++;
      } else {
        throw new Error("Out of bounds");
      }
      break;
    case "W":
      if (place.x - 1 >= 0) {
        place.x--;
      } else {
        throw new Error("Out of bounds");
      }
      break;
    case "S":
      if (place.y - 1 >= 0) {
        place.y--;
      } else {
        throw new Error("Out of bounds");
      }
      break;
  }
  return { x: x, y: y };
}
