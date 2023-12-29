import React, { useContext } from "react"
import Image from "next/image"

import { useCellsContext, useTokenContext } from "@/app/context"
import styles from "@/app/styles/House.module.css"

interface TokenProps {
	color: string;
	token: any;
	playerId: string;
}

function Token({ color, token, playerId }: TokenProps) {
	const { cells, setCells } = useCellsContext()
	const { tokens, setTokens } = useTokenContext()

	const move = (e) => {
		if (token.isHl) {
			if (token.inHouse) {
				const cellIndex = cells.findIndex(cell => cell.start === color)
				const cell = cells[cellIndex]

				const token = tokens[playerId].find(token => token.id == e.target.id)

				if (cell.tokens) {
					cell.tokens.push({ pid: playerId, color })
				} else {
					cell.tokens = [{ pid: playerId, color }]
				}

				setCells(prev => [...cells, cell])
			}
		}
	}

	return (
		<div id={token.id} className={`${token.isHl ? `${styles.hl} ${styles.pointer}` : ""}`} onClick={move}>
			<Image id={token.id} src={`/token-${color}.png`} width={40} height={40} />
		</div>
	)
}

export default Token
