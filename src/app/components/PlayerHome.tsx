"use client";

import React from "react"

import styles from "@/app/styles/PlayerHome.module.css";
import { homes } from "@/app/class/cell-structure";


function PlayerHome() {
  return (
    <>
    {
      homes.map((home, i) => <div className={styles[home.name]}></div>)
    }
    </>
  )
}

export default PlayerHome
