export type CharactersType = {
    id: string;
    name: string;
    image: string;
}

export type LocationsType = {
    id: string;
    name: string;
    image: string;
}

export type EpisodesType = {
    id: string;
    videoUrl: string;
    date: string;
    name: string;
    image: string;
}
export type SeasonsType = {
    id: string;
}
export type CommentsType = {
    id: number;
    text: string;
    username: string;
    createdAt: string
}