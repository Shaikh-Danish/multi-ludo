import React, { useState } from "react"

import styles from "@/app/styles/Dice.module.css"
import { getNextPlayer, unHighlightTokens } from "@/app/utils/util"
import { useTurnContext, useTokenContext, useDiceDisabledContext, useDiceNumberContext, useCellsContext } from "@/app/context"

function Dice() {
	const { diceDisabled, setDiceDisabled } = useDiceDisabledContext()
	const { turn, setTurn } = useTurnContext()
	const { tokens, setTokens } = useTokenContext()
	const { diceNumber, setDiceNumber } = useDiceNumberContext()
	const { cells } = useCellsContext()

	const rollDice = (): void => {
		const roll = Math.floor(Math.random() * 6) + 1;
		setDiceNumber(roll)

		const playerTokens = tokens[turn]
		const isAllInHouse = isAllTokensInHouse(playerTokens.tokens)

		console.log(playerTokens.tokens)

		if (isAllInHouse) {
			if (roll === 6) {
				const hlTokens = highlightPlayerTokens(playerTokens.tokens, [], roll)

				setDiceDisabled(true)
				setTokens({ ...tokens, [turn]: { color: playerTokens.color, pid: playerTokens.pid, tokens: hlTokens } })
			} else {
				// unHighlightTokens(tokens)
				// setTokens(tokens)
				setTurn(getNextPlayer(turn))
			}
		} else {
			const homeTokens = []

			cells.find((cell, i) => {
				if (cell.home === playerTokens.color) homeTokens.push([cell, i])
			})
			
			const canMove = canMoveTokens(playerTokes.tokens, homeTokens, roll)
			const hlTokens = highlightPlayerTokens(playerTokens.tokens, homeTokens, roll)

			setDiceDisabled(true)
			setTokens({ ...tokens, [turn]: { color: playerTokens.color, pid: playerTokens.pid, tokens: hlTokens } })
		}
	}

	return (
		<button className={styles.dice} onClick={rollDice} disabled={diceDisabled}>
			{Array.from({ length: diceNumber }, () => <Dots />)}
    </button>
	)
}

function Dots() {
	return <div className={styles.dot}></div>
}

function canMoveTokens(tokens, homeTokens, diceNumber) {
	tokens.forEach(token => {
		if (token.home) 
	})
}

function highlightPlayerTokens(tokens, homeTokens, diceNumber: number) {
	return tokens.map(token => {
		if (token.home) {
			  const tokenIndex = homeTokens.findIndex(([, index]) => token.index === index)

				if (diceNumber <= (homeTokens.length - (tokenIndex + 1))) {
					return { ...token, isHl: true }
				}

				return token
		}

		if (!token.inHouse && !token.isFinish) {
			return { ...token, isHl: true }
		} 
		
		if (diceNumber === 6 && token.inHouse) {
			return { ...token, isHl: true }
		}

		return token
	})
}

function isAllTokensInHouse(tokens) {
	return tokens.every(token => token.inHouse === true)
}

export default Dice
