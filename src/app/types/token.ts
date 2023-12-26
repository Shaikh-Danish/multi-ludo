export interface Token {
  inHouse: boolean,
  index: number | null,
  home: boolean
}

export interface Tokens {
  [key: string]: Token;
}