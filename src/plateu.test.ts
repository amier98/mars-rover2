import { Grid, createPlateu } from "./plateu";
describe("test if plateu has been created", () => {
  it("should return 5x5 grid array", () => {
    const expectedHeight: number = 5;
    const expectedWidth: number = 5;
    const plateu: Grid = createPlateu(expectedHeight, expectedWidth);
    // expect(plateu.height).toBeDefined();
    expect(plateu.height).toEqual(expectedHeight);
    // expect(plateu?.width).toBeDefined();
    expect(plateu?.width).toEqual(expectedWidth);
    //needs to be exact type
    // const result: Grid = add({ x: 5, y: 5 });
    // expect(add({ x: 0, y: 0 })).toEqual(result);
  });
  it("grid should not be more than 5 or less than 0", () => {
    const plateu = createPlateu(5, 5);
    expect(plateu?.height).toEqual(5);
    expect(plateu?.width).toEqual(5);
  });
  it("throw error if grid values are incorrect", () => {
    const plateu = createPlateu(-1, 3);
    expect(plateu).toThrowError(Error);
  });
});
