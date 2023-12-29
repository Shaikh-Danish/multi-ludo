import React, { createContext, useContext } from "react"

import { CellType } from "@/app/types"

interface CellContextProps {
  cells: CellType[];
  setCells: React.Dispatch<React.SetStateAction<CellType[]>>;
}

const defaultCellContext: CellContextProps = {
  cells: [],
  setCells: () => {}
};

export const cellsContext = createContext<CellContextProps>(defaultCellContext);

export const useCellsContext = () => {
  const context = useContext(cellsContext);
  if (!context) {
    throw new Error("useCellsContext must be used within a CellProvider");
  }
  return context;
};
