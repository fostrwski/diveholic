type Gear = {
  exposureProtection: {
    type: string;
    thickness: number | null;
  };
  tanks: {
    count: number;
    type: string;
  };
};

export default Gear;
