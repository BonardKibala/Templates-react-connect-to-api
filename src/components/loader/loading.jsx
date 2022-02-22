import React from "react";
import LoadingSpin from "react-loading-spin";
import { Loader } from "./loadingElements";

const LoadingSpins = () => (
  <Loader>
    <LoadingSpin
      duration="0.5s"
      width="8px"
      timingFunction="ease-in-out"
      direction="alternate"
      size="100px"
      primaryColor="#220a37"
      secondaryColor="grey"
      numberOfRotationsInAnimation={2}
    />
  </Loader>
);
export default LoadingSpins;
