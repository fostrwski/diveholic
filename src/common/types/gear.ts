type Gear = {
  exposureProtection: {
    type: string;
    thickness: number | null;
  };
  tanks: {
    count: number;
    type: string;
  };
  bcd: string | null;
  fins: string | null;
  regulator: string | null;
};

export default Gear;
