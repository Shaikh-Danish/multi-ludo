"use client";

import React, { useState } from "react";

import Cell from "./Cell"
import Token from "./Token"
import { CellType } from "@/app/types"
import { useTokenContext } from "@/app/context"
import styles from "@/app/styles/Cells.module.css";

function Cells({ cells }: CellType[]) {
  const { tokens } = useTokenContext()

  const cellTokens = filterAndMapTokens(tokens)
  const cellsWithTokens = getTokens(cellTokens)

  return (
    <>
      {renderCells(cells, cellsWithTokens)}
    </>
  );
}

function filterAndMapTokens(tokens) {
  const cellTokens = [];

  Object.entries(tokens).forEach(([_, { pid, color, tokens }]) => {
    tokens.forEach(token => {
      if (!token.inHouse) {
        cellTokens.push({ ...token, pid, color });
      }
    });
  });

  return cellTokens;
}

function getTokens(tokens) {
  const tokensRef = [...tokens]

  const indexMap = new Map()

  tokensRef.forEach(item => {
    const index = item.index;
    if (!indexMap.has(index)) {
      indexMap.set(index, [item]);
    } else {
      indexMap.get(index).push(item);
    }
  });

  return [...indexMap?.values()]
}

function renderCells(cells, cellsWithTokens) {
  return cells.map((cell, index) => {
    const token = cellsWithTokens.find(([tk]) => tk.index === index);
    // console.log(token);

    if (token) {
      return renderCellWithToken(cell, token)
      // return isBool(cell.entry)
      //   ? [renderCellWithToken(cell, token), renderHomeCells(cell.cells, token)]
      //   : renderCellWithToken(cell, token);
    } else {
      return renderCellWithoutToken(cell);
      // return isBool(cell.entry)
      //   ? [<Cell cell={cell} key={index} />, ...cell.cells.map((subCell, j) => <Cell cell={subCell} key={j} />)]
      //   : renderCellWithoutToken(cell);
    }
  });

  // renderMultipleCells(cells, (cell, index) => {
  //
  // });
}

function renderCellWithToken(cell, token) {
  return (
    <Cell cell={cell} isMultiple={token.length}>
      {token.map(tk => <Token color={tk.color} token={tk} playerId={tk.pid} isMultiple={token.length} />)}
    </Cell>
  );
}

function renderCellWithoutToken(cell) {
  return <Cell cell={cell} />;
}

function renderMultipleCells(cells, renderFunction) {
  return cells.map((cell, index) => renderFunction(cell, index));
}

function renderHomeCells(cells, tokens) {
  return cells.map((cell, j) => {
    if (tokens.length >= 1) {
      return tokens.map(token => {
        console.log(token);
        if (tokens.color === "yellow") {
        }
        if (token.home) {
          return <Cell cell={cell} token={token} key={j} />
        } else {
          return <Cell cell={cell} key={j} />
        }
      })
    } else {
      return <Cell cell={cell} key={j} />
    }
  })
}

function isBool(val: string): boolean {
  return Boolean(val)
}

export default Cells;
