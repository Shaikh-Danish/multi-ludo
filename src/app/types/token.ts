export interface Token {
  inHouse: boolean;
  index: number | null;
  home: boolean;
  isHl: boolean;
  tokens?: Token[];
  id: number;
  isFinish: boolean;
}

export interface Tokens {
  [key: string]: {
    tokens: Token[];
    color: string;
    pid: string;
  };
}
