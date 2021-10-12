import { Team } from "../src/team";

describe("tesing Team class and funtionaities", () => {
  let team: Team;
  let playerName: string;
  let score: number;

  beforeEach(() => {
    team = new Team("banglore");
  });

  test("player score 4 runs", () => {
    playerName = "Kirat_Nohil";
    score = 4;
    team.setScore(playerName, score);
    let excpeted = 4;
    let recieved = team.getPlayerScore(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("player losses his wicket ", () => {
    playerName = "Kirat_Nohil";
    score = -1;
    team.setScore(playerName, score);
    let excpeted = 0;
    let recieved = team.getPlayerScore(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks whether player is out or not,here player is not out ", () => {
    playerName = "Kirat_Nohil";
    score = 4;
    team.setScore(playerName, score);
    let excpeted = false;
    let recieved = team.isPlayerOut(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks whether player is out or not,here player is out ", () => {
    playerName = "R_Rumrah";
    score = -1;
    team.setScore(playerName, score);
    let excpeted = true;
    let recieved = team.isPlayerOut(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks whether player has palyed or not,here player has not played ", () => {
    playerName = "Kirat_Nohil";
    let excpeted = true;
    team.setPlayer(playerName);
    let recieved = team.isPlayerPlayed(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks whether player has palyed or not,here player has not played ", () => {
    playerName = "Kirat_Nohil";
    let excpeted = false;
    let recieved = team.isPlayerPlayed(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks whether player has palyed or not,here player has played ", () => {
    playerName = "Kirat_Nohil";
    score = -1;
    team.setScore(playerName, score);
    let excpeted = true;
    let recieved = team.isPlayerOut(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks numbers of balls a player played,here zero", () => {
    playerName = "Kirat_Nohil";
    let excpeted = 0;
    let recieved = team.getBallsPlayedBy(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("checks numbers of balls a player played,here 1", () => {
    playerName = "Kirat_Nohil";
    score = 0;
    team.setScore(playerName, score);
    let excpeted = 1;
    let recieved = team.getBallsPlayedBy(playerName);
    expect(recieved).toBe(excpeted);
  });

  test("check the team score card who has played,now it will return empty string", () => {
    let expected = "";
    let recieved = team.TeamScoreCard();
    expect(recieved).toEqual(expected);
  });

  test("check the team score card who has played,now it will return string of players score along with balls played", () => {
    team.setPlayer("Kirat_Nohil");
    let expected = "Kirat_Nohil - 0* (0 balls)\n";
    let recieved = team.TeamScoreCard();
    expect(recieved).toEqual(expected);
  });
});
