import React, { useState } from "react"

import styles from "@/app/styles/Dice.module.css"


function Dice() {
	const [diceNumber, setDiceNumber] = useState<number>(1)

	const rollDice = (): void => {
		const roll = Math.floor(Math.random() * 6) + 1;
		setDiceNumber(roll)
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

export default Dice