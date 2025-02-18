export interface Pokemon {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonResult[];
}

export interface PokemonResult {
    name: string;
    url: string;
}