"use client";

import React from "react";

import Token from "./Token"

import { CellType } from "@/app/types"
import styles from "@/app/styles/Cells.module.css";

function Cell({ cell, token }: { cell: CellType, token: any }) {

	return (
	    <div
	      className={`${styles.cell} ${styles[cell.start]}`}
	      style={{
	        gridColumn: cell.col,
	        gridRow: cell.row,
	      }}
	    >
				{
					token ? <Token token={token} playerId={token.pid} color={token.color} /> : ""
					// cell.tokens &&
					// cell.tokens.map(token => {
					// 	return (
					// 		<div>
					// 			<Token token={token} playerId={token.pid} color={token.color} />
					// 		</div>
					// 	)
					// })
				}

			</div>
	);
}

export default Cell
