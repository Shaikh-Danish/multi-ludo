"use client";

import React, { useState } from "react";

import Cell from "./Cell"
import { CellType } from "@/app/types"
import styles from "@/app/styles/Cells.module.css";

function Cells({ cells }: CellType[]) {
  return (
    <>
      {cells.map((cell, i) => {
        if (isBool(cell.entry)) {
          return [<Cell cell={cell} key={i} />, cell.cells.map((cell, j) => <Cell cell={cell} key={j} />)]
        }

        return <Cell cell={cell} key={i} />
      })}
    </>
  );
}

function isBool(val: string): boolean {
  return Boolean(val)
}

export default Cells;
