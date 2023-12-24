import React, { useState, useContext } from "react"

import styles from "@/app/styles/Dice.module.css"

import { turnContext } from "@/app/context"

function Dice() {
	const [diceNumber, setDiceNumber] = useState<number>(1)
	const { turn, setTurn } = useContext(turnContext)

	const rollDice = (): void => {
		const roll = Math.floor(Math.random() * 6) + 1;
		setDiceNumber(roll)

		if (roll < 6) {
			//setTurn(getNextPlayer(turn))
		}
	}

	return (
		<div className={styles.dice} onClick={rollDice}>
			{Array.from({ length: diceNumber }, () => <Dots />)}
    	</div>
	)
}

function Dots() {
	return <div className={styles.dot}></div>
}

function getNextPlayer(currentPlayer: number): number {
	const totalPlayers = 4
	return (currentPlayer % totalPlayers) + 1;
}

export default Dice