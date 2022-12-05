type Gear = {
  exposureProtection: {
    type: string;
    thickness: number | null;
  };
  tanks: {
    count: number;
    type: string;
  };
  bcd: string;
  fins: string;
  regulator: string;
};

export default Gear;
