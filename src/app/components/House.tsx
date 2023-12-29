import React, { useContext } from "react";

import styles from "@/app/styles/House.module.css"
import TokenHouse from "./TokenHouse"
import { Player } from "@/app/types"

interface HouseProps {
  player: Player;
  isTurn: boolean;
  token: any;
}

function House({player, isTurn, token }: HouseProps) {
  return (
    <div
      className={`${styles[player.color]} ${styles.house} ${isTurn && styles.hlBorder}`}
    >
      <div className={`${styles.box} ${isTurn && styles.hlBorder}`}>
        {token.map(t => <TokenHouse token={t} color={player.color} playerId={player.id} />)}
      </div>
    </div>
  );
}

export default House;
