"use client";

import React from "react";
import Image from "next/image"

import Token from "./Token"

import { CellType } from "@/app/types"
import { getNextPlayer, unHighlightTokens, removeTokenFromHouse } from "@/app/utils/util"
import { useCellsContext, useTokenContext, useTurnContext, useDiceDisabledContext, useDiceNumberContext } from "@/app/context"
import styles from "@/app/styles/Cells.module.css";

function Cell({ cell, token, isMultiple, children }: { children: any, cell: CellType, isMultiple: number | undefined, token: any }) {
	const { turn, setTurn } = useTurnContext()
	const { cells } = useCellsContext()
	const { tokens, setTokens } = useTokenContext()
	const { disabled, setDisabled } = useDiceDisabledContext()
	const { diceNumber } = useDiceNumberContext()

	const move = (e) => {
		if (token.isHl) {
			const tokenId: number = Number(e.target.id)

			if (token.inHouse) {
				const cellIndex = cells.findIndex((cell) => findCell(cell, color))
				const cell = cells[cellIndex]

				const token = findToken(tokens[playerId].tokens, tokenId)
				token.index = cellIndex

				unHighlightTokens(tokens)
				removeTokenFromHouse(tokens, token.id, playerId)

				setTokens(tokens)
				setDisabled(false)
			} else {

				const tokenIndex: number = moveToken(tokens, diceNumber, turn, tokenId)

				const token = otherTokensOnCell(tokens, turn, tokenIndex)
				unHighlightTokens(tokens)

				setTokens(tokens)
				setDisabled(false)
				setTurn(getNextPlayer(turn))
			}
		}
	}

	return (
	    <div
	      className={`${styles.cell} ${styles[cell.start]}`}
	      style={{
	        gridColumn: cell.col,
	        gridRow: cell.row,
	      }}
	    >
				{children}
				{
					token && <Token token={token} playerId={token.pid} color={token.color} isMultiple={isMultiple} />
				}
				{
					cell.safe && <Image src={`/star.png`} width={35} height={35} className={styles.star} />
				}
			</div>
	);
}

function findCell(cell, color: string) {
	return cell.start === color
}

function findToken(tokens, targetTokenId: number) {
	return tokens.find(token => token.id == targetTokenId)
}

function moveToken(tokens, diceNumber: number, playerId: string, targetTokenId: number) {
	const token = findToken(tokens[playerId].tokens, targetTokenId)
	return token.index += diceNumber
}

function otherTokensOnCell(tokens, playerId, cellIndex) {
	Object.entries(tokens).forEach(([,{ pid, color, tokens }]) => {
		tokens.forEach(token => {
			if (token.index == cellIndex && playerId != pid) {
				token.inHouse = true;
				token.index = null;
			}
		});
	})
}

export default Cell
