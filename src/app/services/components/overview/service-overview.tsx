"use client";

import BoatOverview from "./boat";
import MotorOverview from "./motor/motor-overview";
import TrailerOverview from "./trailer";

export default function ServiceOverview() {
  return (
    <>
      <h2 className="text-xl font-bold">Overview</h2>
      <BoatOverview />
      <MotorOverview />
      <TrailerOverview />
    </>
  );
}
