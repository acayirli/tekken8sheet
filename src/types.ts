export type InputsType = "1" | "2" | "3" | "4" | "1+2" | "1+3" | "1+4" | "2+3" | "2+4" | "3+4" | "1+2+3+4" 
| "b" | "f" | "u" | "d" | "uf" | "ub" | "df" | "db" | "bhold" | "bracketl" | "bracketr"
| "dbhold" | "dfhold" | "dhold" | "fhold" | "n" | "ubhold" | "ufhold" | "uhold";

export type PropertiesType = "powercrush" | "tornado" | "heat" | "homing" | "chip";

export type MoveType = {
    inputs: string[],
    hitProperties?: PropertiesType[],
    hint?: string
}

export type CategoryType = {
    title: string,
    moves: MoveType[],
}

export type SheetType = {
    title: string,
    categories: CategoryType[],
}