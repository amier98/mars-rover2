import { Grid, createPlateu } from "./plateu";

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
  if (x >= 0 && y >= 0 && x <= plateu.height && y <= plateu.width) {
    return { plateu: plateu, x: x, y: y, direction: direction };
  } else {
    throw new Error("invalid");
  }
}

export function processIntruction(
  rover: Rover,
  instruction: roverInstruction[],
  plateu: Grid
) {
  // need to make instruction string array so it takes multiple inputes
  for (const instruct of instruction) {
    // const test = instruct.join("");
    console.log(instruct);
    switch (instruct) {
      case "L":
        moveLeft(rover);
        break;
      case "R":
        moveRight(rover);
        break;
      case "M":
        //move
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
  // console.log(place.direction);
  //need the processIntruction here
  // if direction is equal to west or east, add 1 to x
  switch (place.direction) {
    case "N":
      if (place.y + 1 <= plateu.height) {
        place.y++;
        // } else {
        //   throw new Error("Out of bounds");
      }
      break;
    case "E":
      if (place.x + 1 <= plateu.width) {
        place.x++;
        // } else {
        //   throw new Error("Out of bounds");
      }
      break;
    case "W":
      if (place.x - 1 >= 0) {
        place.x--;
        // } else {
        //   throw new Error("Out of bounds");
      }
      break;
    case "S":
      if (place.y - 1 >= 0) {
        place.y--;
        // } else {
        //   throw new Error("Out of bounds");
        // }
      }
      break;
  }

  return { x: x, y: y };
}

export function isDirection(input: string): input is roverInstruction {
  return input === "L" || input === "R" || input === "M";
}
