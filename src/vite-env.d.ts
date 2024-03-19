/// <reference types="vite/client" />

type Match = {
    host: Team;
    guest: Team;
}

type Team = {
    name: string;
    image: string;
    statistic: Statistic;
}

type Statistic = {
    goals: MatchEvent[];
    possesion: number;
    shots: number;
    corners: number;
    offsides: number;
    fouls: number;
    yellowCards: number;
    redCards: number;
}

type MatchEvent = {
    minute: number
}