"use client"
import { useState } from "react"

import House from "@/app/components/House"
import Cells from "@/app/components/Cells"
import Dice from "@/app/components/Dice"

export default function Home() {

  const [turn, setTurn] = useState<string>("player-1")

  return (
    <main>
      <House color={`yellow`} hlBorder={turn === "player-1" ? "hlBorder" : ""} player="player-1" />
      <House color={`red`} hlBorder={turn === "player-2" ? "hlBorder" : ""} player="player-2"/>
      <House color={`blue`} hlBorder={turn === "player-4" ? "hlBorder" : ""} player="player-3"/>
      <House color={`green`} hlBorder={turn === "player-3" ? "hlBorder" : ""} player="player-4"/>

      <div className="home">
        <Dice />
      </div>

      <Cells />
    </main>
  )
}
