"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { apiClient } from "../api-costum";

const ServiceList = () => {
  useEffect(() => {
    getServices();
  }, []);
  const [services, setServices] = useState([]);
  const getServices = () => {
    apiClient
      .get("/services?populate=*")
      .then((response) => {
        console.log(response.data.data);
        setServices(response.data.data);
      })
      .catch((error) => {
        alert(`Error! ${error}`);
      });
  };
  const displayServices = () => {
    return services?.map((service) => {
      return <ServiceCard service={service} />;
    });
  };
  return (
    <>
      {/* <h1 className="text-2xl">Services </h1> */}
      <h1
        id="projects"
        className="text-xl text-center mt-32 font-extrabold sm:text-4xl m-6"
      >
        Services
      </h1>
      <div className="flex flex-wrap lg:my-6 ">{displayServices()}</div>
    </>
  );
};

export default ServiceList;
