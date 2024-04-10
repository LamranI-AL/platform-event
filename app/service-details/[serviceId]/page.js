"use client";
import React from "react";
import ServiceForm from "../../apply/_components/ServiceForm";
import ServiceHero from "./_components/servicehero";

const page = ({ params }) => {
  //   window.alert(params.serviceId);
  console.log(params.serviceId);
  return (
    <div>
      <ServiceForm />
      {/* hy from service display */}
      <ServiceHero id={params.serviceId} />
    </div>
  );
};

export default page;
