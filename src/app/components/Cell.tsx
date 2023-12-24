"use client";

import React from "react";

import { CellType } from "@/app/class/cell-structure";
import styles from "@/app/styles/Cells.module.css";

function Cell({ cell }: CellProps) {
	return (
	    <div
	      className={`${styles.cell} ${styles[cell.start]}`}
	      style={{
	        gridColumnStart: cell.col,
	        gridColumnEnd: cell.col,
	        gridRowStart: cell.row,
	        gridRowEnd: cell.row,
	      }}
	    ></div>
	);
}

export default Cell