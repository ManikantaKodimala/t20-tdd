import { scorePrediction } from "../src/prediction";

test("predicting score ,which will be between 1 to 6", () => {
  let expected = 6;
  let recieved = scorePrediction();
  expect(recieved).toBeLessThanOrEqual(expected);
});
