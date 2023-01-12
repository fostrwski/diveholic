type Gear = {
  exposureProtection: {
    type: string;
    thickness: number | null;
  };
  tanks: {
    count: number | null;
    type: string;
  };
  bcd: string;
  fins: string;
  regulator: string;
};

export default Gear;
