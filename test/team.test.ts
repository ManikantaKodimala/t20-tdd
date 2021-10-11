import { Team } from "../src/team";

describe("", () => {
  let team: Team;
  let playerName: string;
  let isNewPlayer: boolean;
  let score: number;
  beforeEach(() => {
    team = new Team("banglore");
  });
  test("player score 4 runs", () => {
    playerName = "Kirat_Nohil";
    isNewPlayer = false;
    score = 4;
    team.setScore(playerName, score, isNewPlayer);
    let excpeted = 4;
    let recieved = team.getPlayerScore(playerName);
    expect(recieved).toBe(excpeted);
  });
  test("player losses his wicket ", () => {
    playerName = "Kirat_Nohil";
    isNewPlayer = false;
    score = -1;
    team.setScore(playerName, score, isNewPlayer);
    let excpeted = 0;
    let recieved = team.getPlayerScore(playerName);
    expect(recieved).toBe(excpeted);
  });
});
