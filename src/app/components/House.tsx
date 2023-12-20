import React from "react";

function House(color: string, player: string) {
  return (
    <div
      className={`${color} house`}
      id={player}
    >
      <div className={`token-square token-1 token-${color}`}></div>
      <div className={`token-square token-2 token-${color}`}></div>
      <div className={`token-square token-3 token-${color}`}></div>
      <div className={`token-square token-4 token-${color}`}></div>
    </div>
  );
}

export default House;
