import React from "react"

import { Token as TokenType } from "@/app/types/token"

import styles from "@/app/styles/House.module.css"
import Token from "./Token"

interface TokenHouseProps {
   color: string;
   token: TokenType;
   playerId: string;
}

function TokenHouse({ color, token, playerId }: TokenHouseProps) {
  return (
    <div className={`${styles.tokenBox} ${styles[color]}`}>
      {token.inHouse ? <Token color={color} token={token} playerId={playerId} /> : ""}
    </div>
  )
}

export default TokenHouse
