import {
  roverPosition,
  moveRight,
  moveLeft,
  processIntruction,
  move,
} from "./rover";
import { createPlateu } from "./plateu";

describe("rover", () => {
  it("rover is in plateu", () => {
    //Arrange
    const plateu = createPlateu(5, 5);
    //Assert
    const rover = roverPosition(plateu, 0, 0, "N");
    //Act
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(0);
    expect(rover.direction).toEqual("N");
  });

  it("rover has been given incorrect coordinates", () => {
    const plateu = createPlateu(5, 5);
    expect(() => roverPosition(plateu, -1, 4, "N")).toThrowError(Error);
    expect(() => roverPosition(plateu, 0, 7, "E")).toThrowError(Error);
  });
});

describe("moveRight", () => {
  it("return correct orientation of rover when it is turning right", () => {
    //Arrange
    const plateu = createPlateu(5, 5);
    const rover = roverPosition(plateu, 0, 0, "N");
    moveRight(rover);
    expect(rover.direction).toEqual("E");

    moveRight(rover);
    expect(rover.direction).toBe("S");

    moveRight(rover);
    expect(rover.direction).toBe("W");
  });
});

describe("moveLeft", () => {
  const plateu = createPlateu(5, 5);
  const rover = roverPosition(plateu, 0, 0, "N");
  it("return left turn of N", () => {
    moveLeft(rover);
    expect(rover.direction).toBe("W");

    moveLeft(rover);
    expect(rover.direction).toBe("S");
  });
});

describe("processInstruction", () => {
  it("return correct x and y coordinates and direction after instruction", () => {
    const plateu = createPlateu(5, 5);
    const rover = roverPosition(plateu, 3, 3, "E");
    console.log(rover.x, rover.y, rover.direction);
    processIntruction(
      rover,
      ["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"],
      plateu
    );
    const moveRover = move(rover, plateu);
    expect(moveRover.x).toEqual(5);
    expect(moveRover.y).toEqual(1);
    console.log(moveRover.x, moveRover.y, rover.direction);
    expect(rover.direction).toEqual("E");
  });

  // it("if rover tries to go out of bounds", () => {
  //   const plateu = createPlateu(5, 5);
  //   const rover = roverPosition(plateu, 0, 0, "N");
  //   processIntruction(rover, ["L", "M"], plateu);
  //   //moveRover = move(rover, plateu);
  //   console.log(rover.direction);
  //   expect(() => move(rover, plateu)).toThrowError("Out");
  // });
});
