"use client";

import React from "react";

import { CellType } from "@/app/class/cell-structure";
import styles from "@/app/styles/Cells.module.css";

interface CellProps extends CellType {
	key: string
}

function Cell({ cell, key }: CellProps) {
	return (
	    <div
	      key={key}
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