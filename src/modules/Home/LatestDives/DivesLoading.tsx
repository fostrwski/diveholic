import DiveCardSkeletonLoader from "common/components/DiveCard/SkeletonLoader";
import React from "react";

const DivesLoading: React.FC = () => {
  return (
    <>
      <DiveCardSkeletonLoader />
      <DiveCardSkeletonLoader />
    </>
  );
};

export default DivesLoading;
