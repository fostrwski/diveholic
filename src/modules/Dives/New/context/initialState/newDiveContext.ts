import newDiveInitialState from "./newDive";
import type { NewDiveContextInitialState } from "./types";

const newDiveContextInitialState: NewDiveContextInitialState = {
  newDive: newDiveInitialState,
  updateNewDiveProp: () => {},
};

export default newDiveContextInitialState;
