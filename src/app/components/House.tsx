import React, { useContext } from "react";

import styles from "@/app/styles/House.module.css"
import TokenHouse from "./TokenHouse"

interface HouseProps {
  isTurn: boolean;
  tokens: any;
  color: string;
  pid: string;
}

function House({pid, color, isTurn, tokens }: HouseProps) {
  return (
    <div
      className={`${styles[color]} ${styles.house} ${isTurn && styles.hlBorder}`}
    >
      <div className={`${styles.box} ${styles.grid} ${isTurn && styles.hlBorder}`}>
        {tokens.map(token => <TokenHouse key={`${token.pid}-${token.id}`} token={token} color={color} playerId={pid} />)}
      </div>
    </div>
  );
}

export default House;
