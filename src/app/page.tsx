"use client"
import { useState } from "react"

import House from "@/app/components/House"
import Cells from "@/app/components/Cells"
import Dice from "@/app/components/Dice"

import { turnContext } from "@/app/context"


export default function Home() {

  const [turn, setTurn] = useState<number>(1)

  return (
    <turnContext.Provider value={{ turn, setTurn }}>
      <main>
        <House color={`yellow`} hlBorder={turn === 1 ? "hlBorder" : ""} player="player-1" />
        <House color={`red`} hlBorder={turn === 2 ? "hlBorder" : ""} player="player-2"/>
        <House color={`blue`} hlBorder={turn === 4 ? "hlBorder" : ""} player="player-3"/>
        <House color={`green`} hlBorder={turn === 3 ? "hlBorder" : ""} player="player-4"/>

        <div className="home">
          <Dice />
        </div>

        <Cells />
      </main>
    </turnContext.Provider>
  )
}
