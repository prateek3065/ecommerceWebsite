import { createContext, useState } from "react";
import { StateContextProviderProps } from "../types/CommonTypes";

type StateContextType = {
  context: StateType;
  setContext: (storeState: StateType) => void;
};

type StateType = {
  searchedInput: string;
};

export const defaultState: StateType = {
  searchedInput: "",
};

export const StateContext = createContext<StateContextType>({
  context: defaultState,
  setContext: () => {},
});

export default function StateContextProvider({
  children,
}: StateContextProviderProps) {
  const [context, setContext] = useState<StateType>(defaultState);
  return (
    <StateContext.Provider value={{ context: context, setContext: setContext }}>
      {children}
    </StateContext.Provider>
  );
}
