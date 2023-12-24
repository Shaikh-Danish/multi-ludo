export interface CellType {
  safe?: boolean;
  break?: string;
  start?: string;
  col: number;
  row: number;
  cells?: Cell[];
  entry?: string;
}

export interface HomeType {
  name: string,
}

export const cells: CellType[] = [
  { safe: true, start: "yellow", break: "hr", col: 2, row: 7 },
  { safe: false, col: 3, row: 7 },
  { safe: false, col: 4, row: 7 },
  { safe: false, col: 5, row: 7 },
  { safe: false, col: 6, row: 7 },
  { safe: false, break: "vr", col: 7, row: 6 },
  { safe: false, col: 7, row: 5 },
  { safe: false, col: 7, row: 4 },
  { safe: true, col: 7, row: 3 },
  { safe: false, col: 7, row: 2 },
  { safe: false, col: 7, row: 1 },
  { safe: false, break: "hr", entry: "red", col: 8, row: 1, cells: [{ start: "red", row: 2, col: 8 }, { start: "red", row: 3, col: 8 }, {start: "red", row: 4, col: 8}, {start: "red", row: 5, col: 8}, {start: "red", row: 6, col: 8}] },
  { safe: false, col: 9, row: 1 },
  { safe: true, start: "red", break: "hr", col: 9, row: 2 },
  { safe: false, col: 9, row: 3 },
  { safe: false, col: 9, row: 4 },
  { safe: false, col: 9, row: 5 },
  { safe: false, col: 9, row: 6 },
  { safe: false, break: "vr", col: 10, row: 7 },
  { safe: false, col: 11, row: 7 },
  { safe: false, col: 12, row: 7 },
  { safe: true, col: 13, row: 7 },
  { safe: false, col: 14, row: 7 },
  { safe: false, col: 15, row: 7 },
  { safe: false, break: "hr", entry: "green", col: 15, row: 8, cells: [{ start: "green", row: 8, col: 14 }, { start: "green", row: 8, col: 13 }, {start: "green", row: 8, col: 12 }, {start: "green", row: 8, col: 11 }, {start: "green", row: 8, col: 10 }] },
  { safe: false, col: 15, row: 9 },
  { safe: true, start: "green", break: "hr", col: 14, row: 9 },
  { safe: false, col: 13, row: 9 },
  { safe: false, col: 12, row: 9 },
  { safe: false, col: 11, row: 9 },
  { safe: false, col: 10, row: 9 },
  { safe: false, break: "vr", col: 9, row: 10 },
  { safe: false, col: 9, row: 11 },
  { safe: false, col: 9, row: 12 },
  { safe: true, col: 9, row: 13 },
  { safe: false, col: 9, row: 14 },
  { safe: false, col: 9, row: 15 },
  { safe: false, break: "hr", entry: "blue", col: 8, row: 15, cells: [{ start: "blue", col: 8, row: 14 }, { start: "blue", col: 8, row: 13 }, {start: "blue", col: 8, row: 12 }, {start: "blue", col: 8, row: 11 }, {start: "blue", col: 8, row: 10 }] },
  { safe: false, col: 7, row: 15 },
  { safe: true, start: "blue", break: "hr", col: 7, row: 14 },
  { safe: false, col: 7, row: 13 },
  { safe: false, col: 7, row: 12 },
  { safe: false, col: 7, row: 11 },
  { safe: false, col: 7, row: 10 },
  { safe: false, break: "vr", col: 6, row: 9 },
  { safe: false, col: 5, row: 9 },
  { safe: false, col: 4, row: 9 },
  { safe: true, col: 3, row: 9 },
  { safe: false, col: 2, row: 9 },
  { safe: false, col: 1, row: 9 },
  { safe: false, break: "hr", entry: "yellow", col: 1, row: 8, cells: [{ start: "yellow", row: 8, col: 2 }, { start: "yellow", row: 8, col: 3 }, {start: "yellow", row: 8, col: 4 }, {start: "yellow", row: 8, col: 5 }, {start: "yellow", row: 8, col: 6 }] },
  { safe: false, col: 1, row: 7 },
];

export const homes: HomeType[] = [
  { name: "player-yellow" },
  { name: "player-red" },
  { name: "player-green" },
  { name: "player-blue" },
]
