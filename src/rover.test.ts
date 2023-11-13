import {
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
  it("if command selects instruction, rover should turn that direction", () => {
    const plateu = createPlateu(5, 5);
    const rover = roverPosition(plateu, 3, 3, "E");
    processIntruction(
      rover,
      ["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"],
      plateu
    );
    const moveRover = move(rover, plateu);
    console.log(moveRover.x);
    console.log(moveRover.y);
    console.log(rover.direction);
    expect(moveRover.x).toEqual(5);
    expect(moveRover.y).toEqual(1);
    expect(rover.direction).toEqual("E");
  });

  // it("if rover tries to go out of bounds", () => {
  //   const plateu = createPlateu(5, 5);
  //   const rover = roverPosition(plateu, 0, 0, "N");
  //   processIntruction(rover, ["L", "M"], plateu);
  //   const moveRover = move(rover, plateu);
  //   expect(moveRover.x).toThrowError("out of bounds");
  //   expect(moveRover.y).toThrowError("out of bounds");
  // });
});
