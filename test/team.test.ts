import { Team } from "../src/team";

describe("", () => {
  let team: Team;
  let playerName: string;
  let isNewPlayer: boolean;
  beforeEach(() => {
    team = new Team("banglore");
  });
  test("", () => {
    playerName = "Kirat_Nohil";
    isNewPlayer = false;
    team.setScore(playerName, 4, isNewPlayer);
    let excpeted = 4;
    let recieved = team.getPlayerScore(playerName);
    expect(recieved).toBe(excpeted);
  });
});
