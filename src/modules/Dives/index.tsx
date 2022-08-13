import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import React from "react";

interface Dives {
  data: any;
}

const Dives: React.FC<Dives> = ({ data }) => {
  return (
    <>
      {data.map((dive: Dive) => (
        <DiveCard key={dive.id} dive={dive} />
      ))}
    </>
  );
};

export default Dives;
