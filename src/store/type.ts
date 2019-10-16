export interface Game {
    id: number,
    title: string,
    link: string,
    crateTime: Date,
}

export type Games = Game[]

export interface RemiState {
    games: Games
}
