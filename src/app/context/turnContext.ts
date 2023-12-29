import { createContext, useContext } from "react"

interface TurnContextProps {
  turn: string;
  setTokens: React.Dispatch<React.SetStateAction<string>>;
}

const defaultTurnContext: TurnContextProps = {
  turn: "",
  setTurn: () => {}
};

export const turnContext = createContext<defaultTurnContext>(defaultTurnContext)

export const useTurnContext = () => {
  const context = useContext(turnContext);
  if (!context) {
    throw new Error("useTurnContext must be used within a TurnProvider");
  }
  return context;
};
