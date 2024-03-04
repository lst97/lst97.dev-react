import { PixelContainer } from "@/app/components/common/layout/Containers";
import { Dashboard } from "@/app/components/main/Dashboard";
import React from "react";

const Welcome = () => {
  return (
    <Dashboard>
      <PixelContainer borderTextTop="~/lst97" className="m-4">
        <h1>Text generation script</h1>
      </PixelContainer>
    </Dashboard>
  );
};

export default Welcome;
