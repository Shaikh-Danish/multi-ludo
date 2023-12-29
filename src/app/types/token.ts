export interface Token {
  inHouse: boolean;
  index: number | null;
  home: boolean;
  isHl: boolean;
  tokens: Token;
  id: number;
}

export interface Tokens {
  [key: string]: Token;
  color: string;
}
