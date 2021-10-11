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
  test("checks whether player is out or not,here player is not out ", () => {
    playerName = "Kirat_Nohil";
    isNewPlayer = false;
    score = 4;
    team.setScore(playerName, score, isNewPlayer);
    let excpeted = false;
    let recieved = team.isPlayerOut(playerName);
    expect(recieved).toBe(excpeted);
  });
    test("checks whether player is out or not,here player is out ", () => {
      playerName = "Kirat_Nohil";
      isNewPlayer = false;
      score = -1;
      team.setScore(playerName, score, isNewPlayer);
      let excpeted = true;
      let recieved = team.isPlayerOut(playerName);
      expect(recieved).toBe(excpeted);
    });
    test("checks whether player has palyed or not,here player has not played ", () => {
      playerName = "Kirat_Nohil";
      isNewPlayer = true;
      let excpeted = false;
      let recieved = team.isPlayerPlayed(playerName);
      expect(recieved).toBe(excpeted);
    });
    test("checks whether player has palyed or not,here player has played ", () => {
      playerName = "Kirat_Nohil";
      isNewPlayer = false;
      score = -1;
      team.setScore(playerName, score, isNewPlayer);
      let excpeted = true;
      let recieved = team.isPlayerPlayed(playerName);
      expect(recieved).toBe(excpeted);
    });

    test("checks numbers of balls a player played,here zero", () => {
      playerName = "Kirat_Nohil";
      isNewPlayer = true;
      score = 0;
      team.setScore(playerName, score, isNewPlayer);
      let excpeted = 0;
      let recieved = team.getPlayerBallsPlayed(playerName);
      expect(recieved).toBe(excpeted);
    });
    test("checks numbers of balls a player played,here 1", () => {
      playerName = "Kirat_Nohil";
      isNewPlayer = false;
      score = 0;
      team.setScore(playerName, score, isNewPlayer);
      let excpeted = 1;
      let recieved = team.getPlayerBallsPlayed(playerName);
      expect(recieved).toBe(excpeted);
    });
});
