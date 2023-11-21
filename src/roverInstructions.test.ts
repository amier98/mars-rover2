import {
  moveRight,
  moveLeft,
  processInstruction,
  move,
} from "./roverInstructions";

import { roverPosition } from "./rover";
import { createPlateu } from "./plateu";

describe("moveRight", () => {
  it("return correct orientation of rover when it is turning right", () => {
    //Arrange
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 0, 0, "N");
    moveRight(rover);
    expect(rover.direction).toEqual("E");

    moveRight(rover);
    expect(rover.direction).toBe("S");

    moveRight(rover);
    expect(rover.direction).toBe("W");
  });
});

describe("moveLeft", () => {
  const plateau = createPlateu(5, 5);
  const rover = roverPosition(plateau, 0, 0, "N");
  it("return rover orientation when making a left turn", () => {
    moveLeft(rover);
    expect(rover.direction).toBe("W");

    moveLeft(rover);
    expect(rover.direction).toBe("S");
  });
});

describe("processInstruction", () => {
  it("should move rover to the right side multiple times", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 0, 0, "N");
    //start position
    console.log(rover.x, rover.y, rover.direction);
    processInstruction(rover, ["R", "M", "M"], plateau);
    const moveRover = move(rover, plateau);
    expect(moveRover.x).toEqual(2);
    expect(moveRover.y).toEqual(0);
    expect(rover.direction).toEqual("E");
    //end position
    console.log(moveRover.x, moveRover.y, rover.direction);
  });

  it("should move rover to the left side multiple times", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 3, 2, "N");
    //start position
    console.log(rover.x, rover.y, rover.direction);
    processInstruction(rover, ["L", "M", "M"], plateau);
    const moveRover = move(rover, plateau);
    expect(moveRover.x).toEqual(1);
    expect(moveRover.y).toEqual(2);
    expect(rover.direction).toEqual("W");
    //end position
    console.log(moveRover.x, moveRover.y, rover.direction);
  });

  it("should move rover forward multiple times", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 3, 2, "N");
    //start position
    console.log(rover.x, rover.y, rover.direction);
    processInstruction(rover, ["M", "M"], plateau);
    const moveRover = move(rover, plateau);
    expect(moveRover.x).toEqual(3);
    expect(moveRover.y).toEqual(4);
    expect(rover.direction).toEqual("N");
    //end position
    console.log(moveRover.x, moveRover.y, rover.direction);
  });

  it("if rover tries to go out of bounds towards west direction ", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 0, 0, "N");
    expect(() => {
      processInstruction(rover, ["L", "M"], plateau);
    }).toThrowError(Error);
  });

  it("if rover tries to go out of bounds towards east direction ", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 5, 0, "N");
    expect(() => {
      processInstruction(rover, ["R", "M"], plateau);
    }).toThrowError(Error);
  });

  it("if rover tries to go out of bounds towards North direction ", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 0, 5, "N");
    expect(() => {
      processInstruction(rover, ["M"], plateau);
    }).toThrowError(Error);
  });

  it("if rover tries to go out of bounds towards South direction ", () => {
    const plateau = createPlateu(5, 5);
    const rover = roverPosition(plateau, 0, 0, "N");
    expect(() => {
      processInstruction(rover, ["R", "R", "M"], plateau);
    }).toThrowError(Error);
  });

  it("if rover tries to go out of bounds in 1x1 grid towards West direction ", () => {
    const plateau = createPlateu(1, 1);
    const rover = roverPosition(plateau, 0, 0, "N");
    expect(() => {
      processInstruction(rover, ["L", "M"], plateau);
    }).toThrowError(Error);
  });
});
