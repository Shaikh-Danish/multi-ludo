import React from "react";
import Image from "next/image"

import styles from "@/app/styles/House.module.css"

interface HouseProps {
  color: string;
  player: string;
}

function House({ color, player }: HouseProps) {
  return (
    <div
      className={`${styles[color]} ${styles.house}`}
      id={player}
    >
      <div className={styles.box}>
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
