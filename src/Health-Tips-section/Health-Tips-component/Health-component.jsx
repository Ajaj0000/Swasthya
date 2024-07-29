import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Footer } from "../../Common/Footer";
import { HealthBanner } from "../HealthBanner";
import { HealthTips } from "../Health-tips";

function HealthComponenet() {
  return (
    <>
      <Headersec />
      <HealthBanner />
      <HealthTips />
      <Footer />
    </>
  );
}
export { HealthComponenet };
