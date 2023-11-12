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
      moveLeft(rover);
      break;
    case "R":
      moveRight(rover);
      break;
    case "M":
      //move
      move(rover);
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

export function move(place: Rover) {
  const { x, y } = place;

  console.log(place.direction);
  //need the processIntruction here
  // if direction is equal to west or east, add 1 to x
  // const currentDirection = "N";
  // if (moveRight(currentDirection)) {
  // }
  switch (place.direction) {
    case "N":
      place.y++;
      break;
    case "E":
      place.x++;
      break;
    case "W":
      place.x++;
      console.log(place.x);
      break;
    case "S":
      place.y++;
  }

  return { place };
}

export function isDirection(input: string): input is roverInstruction {
  return input === "L" || input === "R" || input === "M";
}
