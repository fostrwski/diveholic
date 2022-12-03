import DiveCardSkeletonLoader from "common/components/DiveCard/SkeletonLoader";
import React from "react";

const Loading: React.FC = () => (
    <>
      <DiveCardSkeletonLoader />
      <DiveCardSkeletonLoader />
    </>
);

export default Loading;
