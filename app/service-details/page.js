"use client";
import React from "react";
import ServiceForm from "../apply/_components/ServiceForm";
import ServiceHero from "./_components/servicehero";

const page = () => {
  //   window.alert(params.serviceId);
  // console.log(params.serviceId);
  return (
    <div>
      <ServiceForm />
      {/* hy from service display */}
      <ServiceHero />
    </div>
  );
};

export default page;
