import React from "react";
import { StateType } from "./provider";

export type ContextType = {
  state: StateType;
  dispatch: (args: StateType) => void;
};

export default React.createContext<ContextType | null>(null);
