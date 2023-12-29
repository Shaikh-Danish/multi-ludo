"use client";

import React from "react";

import Token from "./Token"
import { useTokenContext } from "@/app/context"
import { CellType } from "@/app/class/structure";
import styles from "@/app/styles/Cells.module.css";

function Cell({ cell }: CellType) {
	// console.log(cell);
	const { tokens, setTokens } = useTokenContext()
	return (
	    <div
	      className={`${styles.cell} ${styles[cell.start]}`}
	      style={{
	        gridColumnStart: cell.col,
	        gridColumnEnd: cell.col,
	        gridRowStart: cell.row,
	        gridRowEnd: cell.row,
	      }}
	    >
				{
					cell.tokens &&
					cell.tokens.map(token => <Token token={tokens[token.pid]} playerId={token.pid} color={token.color}/>)
				}

			</div>
	);
}

export default Cell
