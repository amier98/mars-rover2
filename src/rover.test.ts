import { roverPosition } from "./rover";
import { createPlateu } from "./plateu";

describe("rover", () => {
  it("rover is in 5x5 rectangular plateau ", () => {
    //Arrange
    const plateu = createPlateu(5, 5);
    //Assert
    const rover = roverPosition(plateu, 0, 0, "N");
    //Act
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(0);
    expect(rover.direction).toEqual("N");
  });

  it("rover is in 1x1 rectangular plateau ", () => {
    //Arrange
    const plateu = createPlateu(1, 1);
    const rover = roverPosition(plateu, 0, 0, "N");
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
