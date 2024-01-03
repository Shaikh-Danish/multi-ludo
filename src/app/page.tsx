"use client"

import { useState } from "react"

import House from "@/app/components/House"
import Cells from "@/app/components/Cells"
import Dice from "@/app/components/Dice"

import { turnContext, tokenContext, cellsContext, diceDisabledContext } from "@/app/context"

import { playerTokens, cellsObj } from "@/app/class/structure"
import { Tokens, cellType } from "@/app/types"

const players = 4

export default function Home() {
  const [turn, setTurn] = useState<string>("p-1")
  const [tokens, setTokens] = useState<Tokens[]>(playerTokens)
  const [cells, setCells] = useState<CellType[]>(cellsObj)
  const [disabled, setDisabled] = useState<boolean>(false)

  const playersArray = [1, 2, 4, 3]

  return (
    <turnContext.Provider value={{ turn, setTurn }}>
      <tokenContext.Provider value={{ tokens, setTokens }}>
        <cellsContext.Provider value={{ cells, setCells }}>
          <diceDisabledContext.Provider value={{ disabled, setDisabled }}>
            <main>
              {
                playersArray.map((p, i) => {
                    const player = tokens[`p-${p}`]
                    return <House key={player.pid} pid={player.pid} color={player.color} tokens={player.tokens} isTurn={player.pid === turn} />
                })
              }

              <div className="home">
                <Dice />
              </div>

              <Cells cells={cells} />
            </main>
          </diceDisabledContext.Provider>
        </cellsContext.Provider>
      </tokenContext.Provider>
    </turnContext.Provider>
  )
}
