import type { SliderMark } from "./types";

export default function generateSliderMarks(marks: Array<number>) {
  const sliderMarks: Array<SliderMark> = marks.map((mark) => ({
    value: mark,
    label: mark.toString(),
  }));

  return sliderMarks;
}
