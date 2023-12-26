export interface CellType {
  safe?: boolean;
  break?: string;
  start?: string;
  col: number;
  row: number;
  cells?: Cell[];
  entry?: string;
}