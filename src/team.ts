import { playerStatus } from "./types";

export enum TeamMembers {
  Kirat_Nohil,
  Ns_Nodhi,
  R_Rumrah,
  Shashi_Henra,
}

export class Team {
  private name: string;
  private individualScore = new Map<string, playerStatus>();

  constructor(name: string) {
    this.name = name;
    for (let index = 0; index < 4; index++) {
      this.individualScore.set(TeamMembers[index], {
        score: 0,
        ballsPlayed: 0,
        isOut: false,
        hasPlayed: false,
      });
    }
  }
  getPlayerScore(name: string): number {
    return this.individualScore.get(name)!.score;
  }

  isPlayerOut(name: string): boolean {
    return this.individualScore.get(name)!.isOut;
  }

  isPlayerPlayed(name: string): boolean {
    return this.individualScore.get(name)!.hasPlayed;
  }

  getPlayerBallsPlayed(name: string): number {
    return this.individualScore.get(name)!.ballsPlayed;
  }

  setScore(name: string, score: number, newPlayer: boolean): void {
    let memberStatus = this.individualScore.get(name)!;
    memberStatus.hasPlayed = true;
     if (!newPlayer) memberStatus.ballsPlayed++;
    if (score != -1) memberStatus.score += score;
    else memberStatus.isOut = true;
    this.individualScore.set(name, memberStatus);
  }
}
