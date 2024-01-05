"use client";

import React, { useState } from "react";

import Cell from "./Cell"
import Token from "./Token"
import { CellType } from "@/app/types"
import { useTokenContext } from "@/app/context"
import styles from "@/app/styles/Cells.module.css";

function Cells({ cells }: CellType[]) {
  const { tokens } = useTokenContext()
  const cellTokens = []

  Object.entries(tokens).forEach(([,{ pid, color, tokens }]) => {
		tokens.forEach(token => {
      if (!token.inHouse) {
        cellTokens.push({...token, pid, color })
      }
		});
	})

  const cellsWithTokens = getTokens(cellTokens)
  return (
    <>
      {cells.map((cell, i) => {
        const token = cellsWithTokens.find(([token]) => token.index === i)


        if (token) {
            if (isBool(cell.entry)) {
              return [<Cell cell={cell} key={i} isMultiple={token.length} />, cell.cells.map((cell, j) => <Cell cell={cell} key={j} />)]
            }

            return (
              <Cell cell={cell} key={i} isMultiple={token.length}>
                {token.map(tk => <Token color={tk.color} token={tk} playerId={tk.pid} isMultiple={token.length} />)}
              </Cell>
            )

        } else {
          if (isBool(cell.entry)) {
            return [<Cell cell={cell} key={i} />, cell.cells.map((cell, j) => <Cell cell={cell} key={j} />)]
          }

          return <Cell cell={cell} key={i}  />
        }
      })}
    </>
  );
}

function isBool(val: string): boolean {
  return Boolean(val)
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

export default Cells;
