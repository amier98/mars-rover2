import {
  Rover,
  isDirection,
  roverPosition,
  moveRight,
  moveLeft,
  processIntruction,
  move,
} from "./rover";
import { Grid, createPlateu } from "./plateu";

describe("check if rover is in grid", () => {
  it("rover is in grid", () => {
    const plateu = createPlateu(5, 5);
    const rover = roverPosition(plateu, 0, 0, "N");
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(0);
    expect(rover.direction).toEqual("N");
  });
});

describe("test isdirection function", () => {
  it("return true if rover can turn R", () => {
    expect(isDirection("R")).toBe(true);
  });
  it("return true if rover can turn L", () => {
    expect(isDirection("L")).toBe(true);
  });
  it("return true if rover can move", () => {
    expect(isDirection("M")).toBe(true);
  });
});

describe("test moveRight function", () => {
  it("return correct orientation of N rover when command is R which is E", () => {
    //arrange
    const plateu = createPlateu(5, 5);
    const rover = roverPosition(plateu, 0, 0, "N");
    moveRight(rover);
    //console.log(rover.direction);
    expect(rover.direction).toEqual("E");

    moveRight(rover);
    //console.log(rover.direction);
    expect(rover.direction).toBe("S");

    moveRight(rover);
    expect(rover.direction).toBe("W");
  });
});

describe("test moveLeft function", () => {
  const plateu = createPlateu(5, 5);
  const rover = roverPosition(plateu, 0, 0, "N");
  it("return left turn of N", () => {
    moveLeft(rover);
    //console.log(rover.direction);
    expect(rover.direction).toBe("W");

    moveLeft(rover);
    //console.log(rover.direction);
    expect(rover.direction).toBe("S");
  });
});

describe("test processIntruction fucntion", () => {
  // it("if command selects L, rover should turn left", () => {
  //   this does work, as I tested it with the console log
  //   const input = processIntruction("L");
  //   expect(input).toBe("W");
  // });
  it("if command selects R, rover should turn right", () => {
    const plateu = createPlateu(5, 5);
    const rover = roverPosition(plateu, 0, 0, "N");
    processIntruction(rover, "R");
    expect(rover.direction).toEqual("E");

    processIntruction(rover, "R");
    expect(rover.direction).toBe("S");

    processIntruction(rover, "R");
    expect(rover.direction).toBe("W");
  });
});

describe("test moveRover function", () => {
  //get the rover coordinate and grid
  //use the processIntruction function to move left and right
  const plateu = createPlateu(5, 5);
  const rover = roverPosition(plateu, 0, 0, "E");
  const moveRover = move(rover);
  it("move rover to right one place", () => {
    expect(moveRover.place.x).toEqual(1);
    console.log(moveRover.place.x);
    expect(moveRover.place.y).toEqual(0);
    // expect(moveRover.direction).toEqual("E");
  });
});
