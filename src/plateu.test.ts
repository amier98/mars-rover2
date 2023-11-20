import { Grid, createPlateu } from "./plateu";
describe("test if plateu has been created", () => {
  it("returns an object with width and height properties", () => {
    //Arrange, Act and assert
    expect(createPlateu(5, 5)).toEqual({ height: 5, width: 5 });
    expect(createPlateu(2, 3)).toEqual({ height: 2, width: 3 });
  });
  it("throw error if grid values are incorrect", () => {
    expect(() => createPlateu(-1, 5)).toThrowError(Error);
    expect(() => createPlateu(1, 6)).toThrowError(Error);
    // expect(() => createPlateu(1, 5)).toThrowError(Error);
  });
});
