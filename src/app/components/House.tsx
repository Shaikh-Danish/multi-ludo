import React from "react";

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
        <div className={`${styles.tokenBox} ${styles[color]}`}></div>
        <div className={`${styles.tokenBox} ${styles[color]}`}></div>
        <div className={`${styles.tokenBox} ${styles[color]}`}></div>
        <div className={`${styles.tokenBox} ${styles[color]}`}></div>
      </div>
    </div>
  );
}

export default House;
