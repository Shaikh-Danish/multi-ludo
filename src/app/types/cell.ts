export interface CellType {
  safe?: boolean;
  start?: string;
  col: number;
  row: number;
  cells?: Cell[];
  entry?: string;
  tokens?: [Token];
}

interface Token {
  pid: string;
  tid: string;
  color: string;
  inHouse: boolean;
  isHl: boolean;
  home: boolean;
}
