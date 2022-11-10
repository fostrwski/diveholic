import type { DiveFlattened } from "common/types";

// Couldn't come up with a better names

interface ComponentUpdatingDiveProps {
  dive: DiveFlattened;
  updateDiveProp: (prop: string, value: any) => void;
}

interface ComponentWithTextFieldsProps {
  dive: DiveFlattened;
  handleTextFieldChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: keyof DiveFlattened
  ) => void;
}

export type { ComponentUpdatingDiveProps, ComponentWithTextFieldsProps };
