"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { apiClient } from "../api-costum";
import { motion } from "framer-motion";
// import imageCompitition from "@/app/service-details/asset/images/";

const ServiceList = () => {
  const servicess = [
    {
      id: 1,
      name: "anniversaire",
      description: "anniv description ",
      img: "./app/service-details/asset/images/Work anniversary-amico.png",
    },
    {
      id: 2,
      name: "fistivale",
      description: "fistivale description ",
      img: "/platform-event/app/service-details/asset/images/Festivities-cuate.png",
    },
    {
      id: 3,
      name: "compitition",
      description: "compitition description ",
      img: "../service-details/asset/images/Business competition-rafiki.png",
    },
    {
      id: 4,
      name: "event scolaire",
      description: "event scolaire description ",
      img: "/platform-event/app/service-details/asset/images/Images-pana.png",
    },
    {
      id: 5,
      name: "sortie",
      description: "sortie description ",
      img: "/platform-event/app/service-details/asset/images/Eating together-bro.png",
    },
  ];
  // useEffect(() => {
  //   getServices();
  // }, []);
  // const [services, setServices] = useState([]);
  // const getServices = () => {
  //   apiClient
  //     // .get("/services?populate=*")
  //     .get("/event")
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setServices(response.data.data);
  //     })
  //     .catch((error) => {
  //       alert(`Error! ${error}`);
  //     });
  // };

  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  const displayServices = () => {
    return servicess?.map((service) => {
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
