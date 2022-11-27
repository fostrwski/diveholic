import { DiveFlattened } from "common/types";

interface NewDiveContextInitialState {
  newDive: DiveFlattened;
  updateNewDiveProp: (prop: keyof DiveFlattened, value: any) => void;
  setNewDive: React.Dispatch<React.SetStateAction<DiveFlattened>>;
}

export type { NewDiveContextInitialState };
