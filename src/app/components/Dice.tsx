import React, { useState } from "react"

import styles from "@/app/styles/Dice.module.css"
import { getNextPlayer, unHighlightTokens } from "@/app/utils/util"
import { useTurnContext, useTokenContext, useDiceDisabledContext } from "@/app/context"

function Dice() {
	const { disabled, setDisabled } = useDiceDisabledContext()
	const { turn, setTurn } = useTurnContext()
	const { tokens, setTokens } = useTokenContext()

	const [diceNumber, setDiceNumber] = useState<number>(1)

	const rollDice = (): void => {
		const roll = Math.floor(Math.random() * 6) + 1;
		setDiceNumber(roll)

		const playerTokens = tokens[turn]
		const isAllInHouse = isAllTokensInHouse(playerTokens.tokens)

		if (isAllInHouse) {
			if (roll === 6) {
				const hlTokens = highlightPlayerTokens(playerTokens.tokens, roll)

				setDisabled(true)
				setTokens({ ...tokens, [turn]: { color: playerTokens.color, pid: playerTokens.pid, tokens: hlTokens } })
			} else {
				unHighlightTokens(tokens, roll)
				setTokens(tokens)
				setTurn(getNextPlayer(turn))
			}
		} else {
			const hlTokens = highlightPlayerTokens(playerTokens.tokens, roll)

			setDisabled(true)
			setTokens({ ...tokens, [turn]: { color: playerTokens.color, pid: playerTokens.pid, tokens: hlTokens } })
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

function highlightPlayerTokens(tokens, diceNumber: number) {
	return tokens.map(token => {
		if (diceNumber < 6 && !token.inHouse) {
			return { ...token, isHl: true }
		} else if (diceNumber === 6 && token.inHouse) {
			return { ...token, isHl: true }
		}

		return token
	})
}

function isAllTokensInHouse(tokens) {
	return tokens.every(token => token.inHouse === true)
}

export default Dice
