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

export function processIntruction(rover: Rover, instruction: roverInstruction) {
  // const tes = createPlateu(5, 5);
  // console.log(roverPosition(tes, 0, 0, "N"));

  switch (instruction) {
    case "L":
      // moveLeft(currentDirection);
      // console.log(moveLeft(currentDirection));
      break;
    case "R":
      moveRight(rover);
      console.log(rover);
      break;
    case "M":
      //move
      break;
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

export function moveLeft(direction: Rover) {
  switch (direction.direction) {
    case "N":
      direction.direction = "W";
      break;
    case "W":
      direction.direction = "S";
      break;
    case "S":
      direction.direction = "E";
      break;
    case "E":
      direction.direction = "N";
      break;
  }

  return direction;
}

export function move(
  x: number,
  y: number,
  direction: orientation,
  instruction: roverInstruction
) {
  //need the processIntruction here
  // if direction is equal to west or east, add 1 to x
  // const currentDirection = "N";
  // if (moveRight(currentDirection)) {
  // }
  // if (moveRight("N")) {
  //   x += 1;
  //   direction = "E";
  // } else if (moveRight("E")) {
  //   y += 1;
  //   direction = "S";
  // } else if (moveRight("S")) {
  //   x += 1;
  //   direction = "W";
  // } else if (moveRight("W")) {
  //   y += 1;
  //   direction = "N";
  // }

  return { x: x, y: y, direction: direction };
}

export function isDirection(input: string): input is roverInstruction {
  return input === "L" || input === "R" || input === "M";
}
