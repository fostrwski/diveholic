import type { DiveFlattened } from "common/types";

interface TabProps {
  dive: DiveFlattened;
  handleTextFieldChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => void;
}

export type { TabProps };
