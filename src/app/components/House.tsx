import React from "react";
import Image from "next/image"

import styles from "@/app/styles/House.module.css"

interface HouseProps {
  color: string;
  player: string;
  hlBorder: string;
}

function House({ color, player, hlBorder }: HouseProps) {
  return (
    <div
      className={`${styles[color]} ${styles.house} ${styles[hlBorder]}`}
      id={player}
    >
      <div className={`${styles.box} ${styles[hlBorder]}`}>
        <div className={`${styles.tokenBox} ${styles[color]}`}>
          <TokenImage player={color}/>
        </div>
        <div className={`${styles.tokenBox} ${styles[color]}`}>
          <TokenImage player={color}/>
        </div>
        <div className={`${styles.tokenBox} ${styles[color]}`}>
          <TokenImage player={color}/>
        </div>
        <div className={`${styles.tokenBox} ${styles[color]}`}>
          <TokenImage player={color}/>
        </div>
      </div>
    </div>
  );
}

function TokenImage({ player }: { player: string }) {
  return (
      <Image src={`/token-${player}.png`} width={40} height={40} />
  )
}

export default House;
