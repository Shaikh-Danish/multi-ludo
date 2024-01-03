import React, { useContext } from "react"
import Image from "next/image"

import styles from "@/app/styles/House.module.css"
import { getNextPlayer, unHighlightTokens, removeTokenFromHouse } from "@/app/utils/util"
import { useCellsContext, useTokenContext, useTurnContext, useDiceDisabledContext } from "@/app/context"

interface TokenProps {
	color: string;
	token: any;
	playerId: string;
}

function Token({ color, token, playerId }: TokenProps) {
	const { turn, setTurn } = useTurnContext()
	const { cells } = useCellsContext()
	const { tokens, setTokens } = useTokenContext()
	const { disabled, setDisabled } = useDiceDisabledContext()

	const move = (e) => {
		if (token.isHl) {
			if (token.inHouse) {
				const cellIndex = cells.findIndex(cell => cell.start === color)
				const cell = cells[cellIndex]

				const token = tokens[playerId].tokens.find(token => token.id == e.target.id)
				token.index = cellIndex

				unHighlightTokens(tokens)
				removeTokenFromHouse(tokens, token.id, playerId)

				setTokens(tokens)
				setDisabled(false)
			} else {
				const tokenId = e.target.id

				Object.entries(tokens).forEach(([,{ pid, color, tokens }]) => {
					tokens.forEach(token => {
						if (token.id == tokenId && playerId == pid) {
							token.index += 1;
						}
					});
				})

				unHighlightTokens(tokens)

				setTokens(tokens)
				setDisabled(false)
				setTurn(getNextPlayer(turn))
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
