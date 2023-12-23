"use client";

import React, { useRef } from "react";

import { cells } from "../class/cell-structure";
import styles from "@/app/styles/Cell.module.css";

function Cell() {
  const col = useRef<number>(2);
  const row = useRef<number>(6);

  const brek = useRef<string>("hor");

  return (
    <div>
      {cells.map((cell, i) => {
        if (cell.break === "hor" || brek.current === "hor") {
          brek.current = "hor";
        } else if (cell.break === "ver" || brek.current === "ver") {
          brek.current = "ver";
        }

        return (
          <div
            key={i}
            className={styles.cell}
            style={{ gridColumn: col.current }}
          ></div>
        );
      })}
    </div>
  );
}

export default Cell;
