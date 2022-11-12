import { DiveFlattened } from "common/types";

interface NewDiveContextInitialState {
  newDive: DiveFlattened;
  updateNewDiveProp: (prop: keyof DiveFlattened, value: any) => void;
}

export type { NewDiveContextInitialState };
