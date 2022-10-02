export type Gear = {
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

export type GearFlattened = {
  exposureProtectionType: string;
  exposureProtectionThickness: number | null;
  tanksCount: number;
  tanksType: string;
  bcd: string;
  fins: string;
  regulator: string;
};
