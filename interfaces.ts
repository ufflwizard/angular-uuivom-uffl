export enum UfflPosition {
  FBK = "fullback",
  HBK = "halfback",
  MD1 = "midfielder 1",
  MD2 = "midfielder 2",
  SPD = "spud",
  HFW = "half forward",
  FFW = "full forward",
  EB1 = "",
  EB2 = "",
  EM1 = "",
  EM2 = "",
  EF1 = "",
  EF2 = ""
}

export interface Weighting {
  position: UfflPosition;
  // stat: "onePercenters";
  weight: number;
}

export interface TeamOwner {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  teamName: string;
}

export interface Venue {
  id: number;
  providerId: string;
  name: string;
  abbreviation: string;
  timezone: string;
  location: string;
  state: string;
}

export interface Club {
  id: number;
  providerId: string;
  name: string;
  nickname: string;
  abbreviation: string;
}

export interface AflTeam {
  id: number;
  providerId: string;
  name: string;
  nickname: string;
  abbreviation: string;
  teamType: string;
  club: Club;
}

export interface Competition {
  code: string;
  name: string;
  id: number;
  providerId: string;
}

export interface Season {
  year: number;
  id: number;
}

export interface Round {
  id: number;
  providerId: string;
  name: string;
  utcStartTime: string;
  utcEndTime: string;
  roundNumber: number;
  abbreviation: string;
  byes: Team[];
}

export interface CompSeason {
  id: number;
  providerId: string;
  name: string;
  shortName: string;
  currentRoundNumber: number;
  rounds: Round;
  competition: Competition;
  season: Season;
}

export interface Score {
  superGoals: number;
  goals: number;
  totalScore: number;
  behinds: number;
}

export interface Match {
  id: number;
  providerId: string;
  utcStartTime: string;
  status: string;
  round: Round;
  compSeason: CompSeason;
  venue: Venue;
  home: {
    team: Team;
    score: Score;
    conference: string;
  };
  away: {
    team: Team;
    score: Score;
    conference: string;
  };
}

export interface Player {
  draftPosition: string;
  firstName: string;
  debutYear: string;
  draftYear: string;
  dateOfBirth: string;
  heightInCm: number;
  id: number;
  providerId: string;
  recruitedFrom: string;
  weightInKg: number;
  draftType: string;
  surname: string;
}
