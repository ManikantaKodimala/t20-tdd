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
}
