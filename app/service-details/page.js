"use client";
import React from "react";
import ServiceForm from "../apply/_components/ServiceForm";
import ServiceHero from "./_components/ServiceHero";

const page = () => {
  return (
    <div className="m-10">
      <ServiceForm />
      <ServiceHero />
    </div>
  );
};

export default page;
