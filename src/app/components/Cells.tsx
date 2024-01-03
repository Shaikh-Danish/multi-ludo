"use client";

import React, { useState } from "react";

import Cell from "./Cell"
import { useTokenContext } from "@/app/context"
import { CellType } from "@/app/types"
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

  return (
    <>
      {cells.map((cell, i) => {
        const token = cellTokens.find(token => token.index === i)

        if (token) {
          return <Cell cell={cell} token={token} key={i} />

        } else {
          if (isBool(cell.entry)) {
            return [<Cell cell={cell} key={i} />, cell.cells.map((cell, j) => <Cell cell={cell} key={j} />)]
          }

          return <Cell cell={cell} key={i} />
        }
      })}
    </>
  );
}

function isBool(val: string): boolean {
  return Boolean(val)
}

export default Cells;
