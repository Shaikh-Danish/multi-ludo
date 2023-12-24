"use client";

import React, { useState } from "react";

import { cells } from "@/app/class/cell-structure";
import styles from "@/app/styles/Cells.module.css";

function Cell() {
  return (
    <>
      {cells.map((cell, i) => {
        return (
          <div
            key={i}
            className={styles.cell}
            style={{
              gridColumnStart: cell.col,
              gridColumnEnd: cell.col,
              gridRowStart: cell.row,
              gridRowEnd: cell.row,
              backgroundColor: cell.start ?? "white",
            }}
          ></div>
        );
      })}
    </>
  );
}

export default Cell;
