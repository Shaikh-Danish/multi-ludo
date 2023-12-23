"use client"

import React, { useRef } from "react";

import { cells } from "../class/cell-structure";
import styles from "@/app/styles/Cell.module.css";

function Cell() {
  const startCol = useRef(1)
  const startRow = useRef(6)

  return (
    <div>
      {cells.map((cell, i) => (
        <div key={i} className={styles.cell}></div>
      ))}
    </div>
  );
}

export default Cell;
