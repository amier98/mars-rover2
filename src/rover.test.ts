import { Rover, isDirection, roverPosition, moveRight } from "./rover";
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
  it("return E if rover is at command R", () => {
    //arrange
    const direction = moveRight("N");
    expect(direction).toEqual("E");
  });
});
