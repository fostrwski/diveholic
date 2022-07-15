import React from "react";
import DefaultLayout from "common/layouts/Default";
import Home from "modules/Home";

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default HomePage;
