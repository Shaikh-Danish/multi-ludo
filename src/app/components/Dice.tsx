import React, { useState } from "react"

import styles from "@/app/styles/Dice.module.css"

import { useTurnContext, useTokenContext } from "@/app/context"

function Dice() {
	const [diceNumber, setDiceNumber] = useState<number>(1)
	const [disabled, setDisabled] = useState<boolean>(false)
	const { turn, setTurn } = useTurnContext()
	const { tokens, setTokens } = useTokenContext()

	const rollDice = (): void => {
		const roll = Math.floor(Math.random() * 6) + 1;
		setDiceNumber(roll)

		const playerTokens = tokens[turn]

		const isAllInHouse = isAllTokensInHouse(playerTokens)

		if (isAllInHouse) {
			if (roll === 6) {
				const hlTokens = highlightPlayerTokens(playerTokens)
				setDisabled(true)

				setTokens({ ...tokens, [turn]: hlTokens })
			} else {
				const unHlTokens = unHighlightTokens(tokens)

				setTokens(unHlTokens)
				setTurn(getNextPlayer(turn))
			}
		}
	}

	return (
		<button className={styles.dice} onClick={rollDice} disabled={disabled}>
			{Array.from({ length: diceNumber }, () => <Dots />)}
    </button>
	)
}

function Dots() {
	return <div className={styles.dot}></div>
}

function getNextPlayer(currentPlayer: string): string {
	const totalPlayers = 4
	return `p-${(Number(currentPlayer.split("-")[1]) % totalPlayers) + 1}`;
}

function highlightPlayerTokens(tokens) {
	return tokens.map(token => ({ ...token, isHl: true }))
}

function unHighlightTokens(tokens) {
	const unHighlighted = {}

	Object.entries(tokens).forEach(([pid,token]) => {
		unHighlighted[pid] = token.map(t => ({ ...t, isHl: false}))
	})

	return unHighlighted
}

function isAllTokensInHouse(tokens) {
	return tokens.every(token => token.inHouse === true)
}

export default Dice
