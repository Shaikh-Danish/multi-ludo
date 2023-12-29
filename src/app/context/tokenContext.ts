import React, { createContext, useContext } from "react"

import { Tokens } from "@/app/types/token"

interface TokenContextProps {
  tokens: Token[];
  setTokens: React.Dispatch<React.SetStateAction<Token[]>>;
}

const defaultTokenContext: TokenContextProps = {
  tokens: [],
  setTokens: () => {}
};

export const tokenContext = createContext<TokenContextProps>(defaultTokenContext);

export const useTokenContext = () => {
  const context = useContext(tokenContext);
  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider");
  }
  return context;
};
