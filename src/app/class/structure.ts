import { CellType, Token, Tokens, Player } from "@/app/types"

const tokens: Token[] = [
  {
    inHouse: true,
    index: null,
    home: false,
    isHl: false,
    id: 1,
  },
  {
    inHouse: true,
    index: null,
    home: false,
    isHl: false,
    id: 2,
  },
  {
    inHouse: true,
    index: null,
    home: false,
    isHl: false,
    id: 3,
  },
  {
    inHouse: true,
    index: null,
    home: false,
    isHl: false,
    id: 4,
  }
];

export const cellsObj: CellType[] = [
  { safe: true, start: "yellow", col: 2, row: 7 },
  { safe: false, col: 3, row: 7 },
  { safe: false, col: 4, row: 7 },
  { safe: false, col: 5, row: 7 },
  { safe: false, col: 6, row: 7 },
  { safe: false, col: 7, row: 6 },
  { safe: false, col: 7, row: 5 },
  { safe: false, col: 7, row: 4 },
  { safe: true, col: 7, row: 3 },
  { safe: false, col: 7, row: 2 },
  { safe: false, col: 7, row: 1 },
  { safe: false, entry: "red", col: 8, row: 1, cells: [{ start: "red", row: 2, col: 8 }, { start: "red", row: 3, col: 8 }, {start: "red", row: 4, col: 8}, {start: "red", row: 5, col: 8}, {start: "red", row: 6, col: 8}] },
  { safe: false, col: 9, row: 1 },
  { safe: true, start: "red", col: 9, row: 2 },
  { safe: false, col: 9, row: 3 },
  { safe: false, col: 9, row: 4 },
  { safe: false, col: 9, row: 5 },
  { safe: false, col: 9, row: 6 },
  { safe: false, col: 10, row: 7 },
  { safe: false, col: 11, row: 7 },
  { safe: false, col: 12, row: 7 },
  { safe: true, col: 13, row: 7 },
  { safe: false, col: 14, row: 7 },
  { safe: false, col: 15, row: 7 },
  { safe: false, entry: "green", col: 15, row: 8, cells: [{ start: "green", row: 8, col: 14 }, { start: "green", row: 8, col: 13 }, {start: "green", row: 8, col: 12 }, {start: "green", row: 8, col: 11 }, {start: "green", row: 8, col: 10 }] },
  { safe: false, col: 15, row: 9 },
  { safe: true, start: "green", col: 14, row: 9 },
  { safe: false, col: 13, row: 9 },
  { safe: false, col: 12, row: 9 },
  { safe: false, col: 11, row: 9 },
  { safe: false, col: 10, row: 9 },
  { safe: false, col: 9, row: 10 },
  { safe: false, col: 9, row: 11 },
  { safe: false, col: 9, row: 12 },
  { safe: true, col: 9, row: 13 },
  { safe: false, col: 9, row: 14 },
  { safe: false, col: 9, row: 15 },
  { safe: false, entry: "blue", col: 8, row: 15, cells: [{ start: "blue", col: 8, row: 14 }, { start: "blue", col: 8, row: 13 }, {start: "blue", col: 8, row: 12 }, {start: "blue", col: 8, row: 11 }, {start: "blue", col: 8, row: 10 }] },
  { safe: false, col: 7, row: 15 },
  { safe: true, start: "blue", col: 7, row: 14 },
  { safe: false, col: 7, row: 13 },
  { safe: false, col: 7, row: 12 },
  { safe: false, col: 7, row: 11 },
  { safe: false, col: 7, row: 10 },
  { safe: false, col: 6, row: 9 },
  { safe: false, col: 5, row: 9 },
  { safe: false, col: 4, row: 9 },
  { safe: true, col: 3, row: 9 },
  { safe: false, col: 2, row: 9 },
  { safe: false, col: 1, row: 9 },
  { safe: false, entry: "yellow", col: 1, row: 8, cells: [{ start: "yellow", row: 8, col: 2 }, { start: "yellow", row: 8, col: 3 }, {start: "yellow", row: 8, col: 4 }, {start: "yellow", row: 8, col: 5 }, {start: "yellow", row: 8, col: 6 }] },
  { safe: false, col: 1, row: 7 },
];

export const playerTokens: Tokens = {
  "p-1": {
    color: "yellow",
    pid: "p-1",
    tokens,
  },
  "p-2": {
    color: "red",
    pid: "p-2",
    tokens,
  },
  "p-3": {
    color: "green",
    pid: "p-3",
    tokens,
  },
  "p-4": {
    color: "blue",
    pid: "p-4",
    tokens,
  }
}

// export const players: Player[] = [
//   {
//     color: "yellow",
//     id: "p-1",
//   },
//   {
//     color: "red",
//     id: "p-2",
//   },
//   {
//     color: "blue",
//     id: "p-4",
//   },
//   {
//     color: "green",
//     id: "p-3",
//   },
// ]
