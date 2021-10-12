import { playerStatus } from "./types";

export enum TeamMembers {
  Kirat_Nohil,
  Ns_Nodhi,
  R_Rumrah,
  Shashi_Henra,
}

export class Team {
  private name: string;
  private individualPlayerStatus = new Map<string, playerStatus>();

  constructor(name: string) {
    this.name = name;
    for (let index = 0; index < 4; index++) {
      this.individualPlayerStatus.set(TeamMembers[index], {
        score: 0,
        ballsPlayed: 0,
        isOut: false,
        hasPlayed: false,
      });
    }
  }
  getPlayerScore(name: string): number {
    return this.individualPlayerStatus.get(name)!.score;
  }

  isPlayerOut(name: string): boolean {
    return this.individualPlayerStatus.get(name)!.isOut;
  }

  isPlayerPlayed(name: string): boolean {
    return this.individualPlayerStatus.get(name)!.hasPlayed;
  }

  getBallsPlayedBy(name: string): number {
    return this.individualPlayerStatus.get(name)!.ballsPlayed;
  }

  setPlayer(name: string) {
    let memberStatus = this.individualPlayerStatus.get(name)!;
    memberStatus.hasPlayed = true;
    this.individualPlayerStatus.set(name, memberStatus);
  }

  setScore(name: string, score: number): void {
    let playerDetails = this.individualPlayerStatus.get(name)!;
    playerDetails.ballsPlayed++;
    if (score != -1) playerDetails.score += score;
    else playerDetails.isOut = true;
    this.individualPlayerStatus.set(name, playerDetails);
  }

  TeamScoreCard(): string {
    let scoreCard: string = "";
    for (let index = 0; index < 4; index++) {
      let memberStatus = this.individualPlayerStatus.get(TeamMembers[index])!;
      if (memberStatus.hasPlayed) {
        let score = memberStatus.score;
        let ballsPlayed = memberStatus.ballsPlayed;
        let out = memberStatus.isOut;
        scoreCard += `${TeamMembers[index]} - ${score}${
          !out ? "*" : ""
        } (${ballsPlayed} balls)\n`;
      }
    }
    return scoreCard;
  }
}
