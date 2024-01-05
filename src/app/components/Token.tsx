import React, { useContext } from "react"
import Image from "next/image"

import styles from "@/app/styles/House.module.css"
import { getNextPlayer, unHighlightTokens, removeTokenFromHouse } from "@/app/utils/util"
import { useCellsContext, useTokenContext, useTurnContext, useDiceDisabledContext, useDiceNumberContext } from "@/app/context"

interface TokenProps {
	color: string;
	token: any;
	playerId: string;
	isMultiple: number | undefined;
}

function Token({ color, token, playerId, isMultiple }: TokenProps) {
	const { turn, setTurn } = useTurnContext()
	const { cells } = useCellsContext()
	const { tokens, setTokens } = useTokenContext()
	const { disabled, setDisabled } = useDiceDisabledContext()
	const { diceNumber } = useDiceNumberContext()

	const tokenSize = isMultiple > 1 ? 28 : 40

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

				if (diceNumber !== 6 && !token) {
					setTurn(getNextPlayer(turn))
				}
			}
		}
	}

	return (
		<div id={token.id} className={`${token.isHl ? `${styles.hl} ${styles.pointer}` : ""} ${isMultiple > 1 ? styles.positionToken : ""}`} onClick={move}>
			<Image id={token.id} src={`/token-${color}.png`} width={tokenSize} height={tokenSize} className={styles.token} />
		</div>
	)
}

function findCell(cell, color: string) {
	return cell.start === color
}

function findToken(tokens, targetTokenId: number) {
	return tokens.find(token => token.id == targetTokenId)
}

function moveToken(tokens, diceNumber: number, playerId: string, targetTokenId: number) {
	const token = findToken(tokens[playerId].tokens, targetTokenId)
	let newIndex: number = token.index + diceNumber

	if (newIndex > 51) {
		newIndex = newIndex % 51 - 1
	}

	token.index = newIndex;

	return token.index;
}

function otherTokensOnCell(tokens, playerId, cellIndex): boolean {
	let onCell = false;

	Object.entries(tokens).forEach(([,{ pid, color, tokens }]) => {
		tokens.forEach(token => {
			if (token.index == cellIndex && playerId != pid) {
				onCell = true
				token.inHouse = true;
				token.index = null;
			}
		});
	})

	return onCell
}

export default Token
