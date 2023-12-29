"use client"

import { useState } from "react"

import House from "@/app/components/House"
import Cells from "@/app/components/Cells"
import Dice from "@/app/components/Dice"

import { turnContext, tokenContext, cellsContext } from "@/app/context"

import { tokensObj, players, cellsObj } from "@/app/class/structure"
import { Tokens, cellType } from "@/app/types"

export default function Home() {
  const [turn, setTurn] = useState<string>("p-1")
  const [tokens, setTokens] = useState<Tokens[]>(tokensObj)
  const [cells, setCells] = useState<CellType[]>(cellsObj)

  const player = players.find(player => player.id === turn)

  return (
    <turnContext.Provider value={{ turn, setTurn }}>
      <tokenContext.Provider value={{ tokens, setTokens }}>
        <cellsContext.Provider value={{ cells, setCells }}>
          <main>
            {players.map(player =>
              <House key={player.id} player={player} token={tokens[player.id]} isTurn={player.id === turn} />
            )}

            <div className="home">
              <Dice />
            </div>

            <Cells cells={cells} />
          </main>
        </cellsContext.Provider>
      </tokenContext.Provider>
    </turnContext.Provider>
  )
}
