import React from "react";

interface Dives {
  data: any;
}

const Dives: React.FC<Dives> = (data) => {
  const { data: dives } = data;
  return <>{console.log(dives)}</>;
};

export default Dives;
