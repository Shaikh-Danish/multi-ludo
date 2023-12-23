"use client";

import React, { useState } from "react";

import { cells } from "@/app/class/cell-structure";
import styles from "@/app/styles/Cells.module.css";

function Cell() {
  // const [cellPosition, setCellPosition] = useState({ row: 6, col: 1 });
  // const [breakType, setBreakType] = useState("hr");
  // const cellPosition = useRef<{ row: number; col: number }>({ row: 6, col: 1 });
  // const col = useRef<number>(2);
  // const row = useRef<number>(6);

  // console.log(cellPosition.current)

  // const brek = useRef<string>("hr");

  return (
    <div>
      {cells.map((cell, i) => {
        // if (
        //   cell.break === "hr" ||
        //   (cell.break !== "vr" && breakType === "hr")
        // ) {
        //   // setCellPosition((prevPosition) => ({
        //   //   ...prevPosition,
        //   //   col: prevPosition.col + 1,
        //   // }));
        //   // setBreakType("hr");
        //   // cellPosition.current.col += 1;
        //   // brek.current = "hr";
        // } else if (
        //   cell.break === "vr" ||
        //   (cell.break !== "hr" && breakType === "vr")
        // ) {
        //   if (cell.break === "vr") {
        //     // cellPosition.current.col += 1;
        //   }

        //   // setBreakType("vr");

        //   // cellPosition.current.row -= 1;
        //   // brek.current = "vr";
        // }

        return (
          <div
            key={i}
            className={styles.cell}
            style={{
              // gridColumnStart: cellPosition.col,
              // gridColumnEnd: cellPosition.current.col + 1,
              // gridRowStart: cellPosition.current.row,
              backgroundColor: cell.start ?? "white",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Cell;
