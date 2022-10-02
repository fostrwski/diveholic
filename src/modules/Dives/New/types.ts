import type { DiveFlattened } from "common/types";

// Couldn't figure out better name
interface ComponentWithTextFieldsProps {
  dive: DiveFlattened;
  handleTextFieldChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: keyof DiveFlattened
  ) => void;
}

export type { ComponentWithTextFieldsProps };
