export function getNextPlayer(currentPlayer: string): string {
	const totalPlayers = 4
	console.log(`p-${(Number(currentPlayer.split("-")[1]) % totalPlayers) + 1}`);

	return `p-${(Number(currentPlayer.split("-")[1]) % totalPlayers) + 1}`;
}

export function unHighlightTokens(tokens) {
	Object.entries(tokens).forEach(([,{ pid, color, tokens }]) => {
		tokens.forEach(token => token.isHl = false);
	})
}

export function removeTokenFromHouse(tokens, tokenId: number, playerId: string) {
	Object.entries(tokens).forEach(([,{ pid, color, tokens }]) => {
		tokens.forEach(token => {
			if (token.id == tokenId && playerId == pid) {
				token.inHouse = false;
			}
		});
	})
}
