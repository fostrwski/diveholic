import { DiveFlattened } from "common/types";
import React, { createContext, useContext, useState } from "react";

import {
  newDiveContextInitialState,
  newDiveInitialState,
} from "./initialState";
import type { NewDiveContextInitialState } from "./initialState/types";

const NewDiveContext = createContext<NewDiveContextInitialState>(
  newDiveContextInitialState
);

interface NewDiveProviderProps {
  initialState?: DiveFlattened;
  children: React.ReactNode;
}

const NewDiveContextProvider: React.FC<NewDiveProviderProps> = ({
  initialState,
  children,
}) => {
  const [newDive, setNewDive] = useState<DiveFlattened>(
    initialState || newDiveInitialState
  );

  const updateNewDiveProp = (prop: keyof DiveFlattened, value: any) => {
    setNewDive((prevState: DiveFlattened) => ({
      ...prevState,
      [prop]: value,
    }));
  };

  return (
    <NewDiveContext.Provider
      value={{ newDive, updateNewDiveProp, setNewDive: setNewDive }}
    >
      {children}
    </NewDiveContext.Provider>
  );
};

const useNewDiveContext = () => {
  const ctx = useContext(NewDiveContext);

  if (!ctx)
    throw new Error(
      "useNewDiveContext must be used within NewDiveContextProvider"
    );

  return ctx;
};

export { NewDiveContextProvider, useNewDiveContext };
