import React, { createContext, useContext } from "react"

interface diceNumberContextProps {
  diceNumber: number;
  setDiceNumber: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultdiceNumberContext: diceNumberContextProps = {
  diceNumber: 0,
  setDiceNumber: () => {}
};

export const diceNumberContext = createContext<diceNumberContextProps>(defaultdiceNumberContext);

export const useDiceNumberContext = () => {
  const context = useContext(diceNumberContext);
  if (!context) {
    throw new Error("useDiceNumberContext must be used within a diceNumberProvider");
  }
  return context;
};
