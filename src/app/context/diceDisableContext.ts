import React, { createContext, useContext } from "react"

interface diceDisabledContextProps {
  diceDisabled: boolean;
  setDiceDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultdisabledContext: diceDisabledContextProps = {
  diceDisabled: false,
  setDiceDisabled: () => {}
};

export const diceDisabledContext = createContext<diceDisabledContextProps>(defaultdisabledContext);

export const useDiceDisabledContext = () => {
  const context = useContext(diceDisabledContext);
  if (!context) {
    throw new Error("useDiceDisabledContext must be used within a diceDisabledProvider");
  }
  return context;
};
