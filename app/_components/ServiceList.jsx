"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { apiClient } from "../api-costum";
import { motion } from "framer-motion";

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

  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  const displayServices = () => {
    return services?.map((service) => {
      return <ServiceCard service={service} />;
    });
  };
  return (
    <motion.div initial="initial" variants={variants} whileInView="inView">
      <h1
        id="services"
        className="text-xl text-center mt-32 font-extrabold sm:text-4xl m-6"
      >
        Services
      </h1>
      <div className="flex flex-wrap lg:my-6 ">{displayServices()}</div>
    </motion.div>
  );
};

export default ServiceList;
