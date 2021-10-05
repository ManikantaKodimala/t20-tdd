import { predictScore } from "../src/prediction";

test("predicting score ,which will be between 1 to 6", () => {
  jest.spyOn(global.Math, "random").mockImplementation(() => 0.5);
  let expected = 6;
  let batsMan = "Kirat_Nohil";
  let recieved = predictScore(batsMan);
  expect(recieved).toBeLessThanOrEqual(expected);
});

test("predicting score ,which will be between 1 to 6", () => {
  let expected = 1;
  let batsMan = "Kirat_Nohil";
  jest.spyOn(global.Math, "random").mockImplementation(() => 0.6);
  let recieved = predictScore(batsMan);
  expect(recieved).toBeGreaterThanOrEqual(expected);
});
describe("spying for score prediction ", () => {
  test("predicting score for Kirat Nohil,which is 6", () => {
    jest.spyOn(global.Math, "random").mockImplementation(() => 0.6);
    let expected = 2;
    let batsMan = "Kirat_Nohil";
    let recieved = predictScore(batsMan);
    expect(recieved).toBe(expected);
  });
});
