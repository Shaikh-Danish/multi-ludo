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
	const { setDiceDisabled } = useDiceDisabledContext()
	const { diceNumber } = useDiceNumberContext()

	const tokenSize = isMultiple > 1 ? 28 : 36

	const move = (e) => {
		if (token.isHl) {
			const tokenId: number = Number(e.target.id)
			const playerTokens = tokens[turn]

			const token = findToken(playerTokens.tokens, tokenId)

			if (token.inHouse) {
				const cellIndex = cells.findIndex((cell) => findCell(cell, color))
				const cell = cells[cellIndex]

				token.index = cellIndex

				unHighlightTokens(tokens)
				removeTokenFromHouse(tokens, token.id, playerId)

				setTokens(tokens)
				setDiceDisabled(false)
			} else {
				if (token.home) {
					const homeCells = []
					cells.forEach((cell, i) => {
						if (cell.home === playerTokens.color) homeCells.push([cell, i])
					})

					const homeCellsCount = 5
					const cellIndex = homeCells.findIndex(cell => cell[1] == token.index)
					const [homeCell] = homeCells[cellIndex]

					if (diceNumber > homeCellsCount - cellIndex) {
						return
					}

					if (cellIndex + diceNumber === homeCellsCount) {
						token.isFinish = true;
					}

					token.index += diceNumber

					unHighlightTokens(tokens)
					setTokens(tokens)
					setDiceDisabled(false)

					if (!token.isFinish) {
						setTurn(getNextPlayer(turn))
					}

				} else {
					const tokenIndex: number = moveToken(tokens, turn, cells,  diceNumber, tokenId)
					const cell = cells[tokenIndex]

					const removedToken = otherTokensOnCell(tokens, cell, turn, tokenIndex)
					unHighlightTokens(tokens)

					setTokens(tokens)
					setDiceDisabled(false)

					if (diceNumber !== 6 && !removedToken) {
						setTurn(getNextPlayer(turn))
					}
				}
			}
		}
	}

	return (
		<div id={token.id} className={`${token.isFinish && styles.hide} ${styles.zIndex} ${token.isHl ? `${styles.hl} ${styles.pointer}` : ""} ${isMultiple > 1 ? styles.positionToken : ""}`} onClick={move}>
			<Image id={token.id} alt={`/token-${color}`} src={`/token-${color}.png`} width={token.isHl ? 40 : tokenSize} height={token.isHl ? 40 : tokenSize} className={styles.token} />
		</div>
	)
}

function moveToken(tokens, playerId: string, cells, diceNumber: number, targetTokenId: number) {
	const token = findToken(tokens[playerId].tokens, targetTokenId)
	const newIndex = getNewIndex(token.index, diceNumber)

	const [homeCell, homeCellIndex] = findHomeCell(cells, token, tokens[playerId].color, diceNumber)

	if (homeCell && homeCellIndex) {
		token.home = true
		token.index = homeCellIndex

		return homeCellIndex
	}

	token.index = newIndex;
	return newIndex;
}

function getNewIndex(tokenIndex: number, diceNumber: number): number {
	let newIndex: number = tokenIndex + diceNumber
	if (newIndex > 51) {
		newIndex = newIndex % 51 - 1
	}

	return newIndex;
}

function findCell(cell, color: string) {
	return cell.start === color
}

function findToken(tokens, targetTokenId: number) {
	return tokens.find(token => token.id == targetTokenId)
}

function otherTokensOnCell(tokens, cell, playerId: string, cellIndex: number): boolean {
	let onCell = false;

	if (cell.safe) return onCell;

	Object.entries(tokens).forEach(([,{ pid, tokens }]) => {
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

function findHomeCell(cells, token, color: string, diceNumber: number): any {
	const cellIndex = token.index + diceNumber
	let entryCell

	for (let i = token.index; i <= cellIndex; i++) {
		const cell = cells[i]

		if (cell.entry && cell.entry === color) {

			if (diceNumber > 0) {
				entryCell = cell;
				break;
			}
		}
		diceNumber--;
	}

	if (entryCell) {
		const homeCells = []
		cells.forEach((cell, index) => {
			if (cell.home === color) homeCells.push([cell, index])
		})


		return [...homeCells[diceNumber - 1]]
	}

	return []
}

function removeToken(tokens, tokenId, turn) {
	tokens[turn].tokens.forEach((token, i) => {
		if (token.id === tokenId) {
			tokens[turn].tokens.splice(i, 1)
		}
	})
}

export default Token
