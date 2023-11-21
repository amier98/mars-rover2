import { createPlateu } from "./plateu";
describe("test if plateu has been created", () => {
  it("returns an object with width and height properties", () => {
    //Arrange, Act and assert
    expect(createPlateu(5, 5)).toEqual({ width: 5, height: 5 });
    expect(createPlateu(2, 3)).toEqual({ width: 2, height: 3 });
  });
  it("throw error if height and width values are incorrect", () => {
    expect(() => createPlateu(-1, 5)).toThrowError(Error);
    expect(() => createPlateu(1, 6)).toThrowError(Error);
  });
});
