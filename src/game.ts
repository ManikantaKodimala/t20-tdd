import { TeamMembers, Team } from "./team";
import { predictScore } from "./prediction";

export class Game {
  private static readonly scoreCard: number[] = [1, 2, 3, 4, 5, 6, 0, -1];
  private score: number = 0;
  private team: Team;
  private oversLeft: number = 4;
  private balls: number = 6;
  private isMatchWon = false;
  private target: number = 40;
  private wicketsLost: number = 0;
  private batsMan: string;
  private nonStriker: string;

  constructor() {
    this.score = 0;
    this.team = new Team("banglore");
    this.batsMan = "";
    this.nonStriker = "";
  }

  getCommentary(result: number, commentFor: string): string {
    let comment: string = "";

    if (commentFor === "over") {
      return `${this.oversLeft} ${
        this.oversLeft > 1 ? "overs left" : "over left"
      }.${this.target - this.score} ${
        this.target - this.score > 1 ? "runs to win" : "run to win"
      }`;
    }
    if (result === -1) {
      comment = `${4 - this.oversLeft}.${6 - this.balls} ${
        this.batsMan
      } has lost his wicket`;
    } else {
      comment = `${4 - this.oversLeft}.${6 - this.balls} ${
        this.batsMan
      } scores ${result} ${result > 1 ? "runs" : "run"}
          `;
    }
    return comment;
  }

  startGame(): void {
    let resultOfShot: number = 0;

    this.batsMan = TeamMembers[0];
    this.nonStriker = TeamMembers[1];
    this.team.setPlayer(this.batsMan);
    this.team.setPlayer(this.nonStriker);
    while (
      this.oversLeft > 0 &&
      !this.isMatchWon &&
      this.wicketsLost < 3 &&
      this.score <= this.target
    ) {
      console.log(this.getCommentary(resultOfShot, "over"));
      while (this.balls > 0 && this.wicketsLost < 3) {
        resultOfShot = predictScore(this.batsMan)!;
        this.balls--;
        this.setStatusOfPlayer(resultOfShot);
        console.log(this.getCommentary(resultOfShot, "each run"));
        if (this.score > this.target) {
          this.isMatchWon = true;
          break;
        }
      }
      if (!this.isMatchWon) {
        this.balls = 6;
        this.oversLeft--;
      }
      [this.batsMan, this.nonStriker] = [this.nonStriker, this.batsMan];
    }
    this.gameStatus();
    console.log(this.team.TeamScoreCard());
  }

  gameStatus() {
    if (this.isMatchWon) {
      console.log(
        `Bangalore won by ${3 - this.wicketsLost} ${
          3 - this.wicketsLost > 1 ? "wickets" : "wicket"
        } and ${24 - ((4 - this.oversLeft) * 6 + (6 - this.balls))} balls left`
      );
    } else if (39 > this.score) {
      console.log(`chennai won by ${this.target - this.score} runs`);
    } else {
      console.log("Match is draw");
    }
  }

  setStatusOfPlayer(result: number) {
    if (result === -1) {
      this.wicketsLost++;
      this.team.setScore(this.batsMan, result);
      if (this.wicketsLost < 3) {
        this.batsMan = TeamMembers[this.wicketsLost + 1];
        this.team.setPlayer(this.batsMan);
      }
      return;
    }
    this.score += result;
    this.team.setScore(this.batsMan, result);
    if (result % 2 === 1) {
      [this.batsMan, this.nonStriker] = [this.nonStriker, this.batsMan];
    }
  }
}
