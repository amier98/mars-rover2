import {
  Rover,
  isDirection,
  roverPosition,
  moveRight,
  moveLeft,
  processIntruction,
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
  it("return correct orientation of N rover when command is R", () => {
    //arrange
    const direction = moveRight("N");
    expect(direction).toBe("E");
  });
  it("return correct orientation of E rover when command is R", () => {
    //arrange
    const direction = moveRight("E");
    expect(direction).toBe("S");
  });
  it("return correct orientation of S rover when command is R", () => {
    //arrange
    const direction = moveRight("S");
    expect(direction).toBe("W");
  });
  it("return correct orientation of W rover when command is R", () => {
    //arrange
    const direction = moveRight("W");
    expect(direction).toBe("N");
  });
});

describe("test moveLeft function", () => {
  it("return left turn of N", () => {
    const direction = moveLeft("N");
    expect(direction).toBe("W");
  });
  it("return left turn of W", () => {
    const direction = moveLeft("W");
    expect(direction).toBe("S");
  });
  it("return left turn of S", () => {
    const direction = moveLeft("S");
    expect(direction).toBe("E");
  });
  it("return left turn of E", () => {
    const direction = moveLeft("E");
    expect(direction).toBe("N");
  });
});

describe("test processIntruction fucntion", () => {
  it("if command selects L, rover should turn left", () => {
    const input = processIntruction("L");
    expect(input).toBe("W");
  });
  it("if command selects R, rover should turn right", () => {
    const input = processIntruction("R");
    expect(input).toBe("E");
  });
});
