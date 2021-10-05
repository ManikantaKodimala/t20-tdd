import { predictScore } from "../src/prediction";

test("predicting score ,which will be between 1 to 6", () => {
  jest.spyOn(global.Math, "random").mockImplementation(() => 0.5);
  let expected = 60;
  let batsMan = "Kirat_Nohil";
  let recieved = predictScore(batsMan);
  expect(recieved).toBeLessThanOrEqual(expected);
});

test("predicting score ,which will be between 1 to 6", () => {
  let expected = 10;
  let batsMan = "Kirat_Nohil";
  jest.spyOn(global.Math, "random").mockImplementation(() => 0.6);
  let recieved = predictScore(batsMan);
  expect(recieved).toBeGreaterThanOrEqual(expected);
});
