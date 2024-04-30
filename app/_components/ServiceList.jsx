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
      description:
        "Célébrez les moments spéciaux avec éclat ! Notre service d'anniversaire est conçu pour transformer chaque année en un souvenir inoubliable. Offrez à vos proches une expérience mémorable, remplie de joie, de surprises et de souvenirs précieux. Laissez-nous orchestrer votre journée spéciale et transformons votre rêve d'anniversaire en réalité ",
      img: "/Work-anniversary.png",
    },
    {
      id: 2,
      name: "fistivale",
      img: "/Festivities-cuate.png",
      description:
        "Plongez dans l'effervescence des festivals avec nous ! Notre service festival vous transporte dans un monde de divertissement, de musique, de gastronomie et de culture. Que vous soyez un passionné de musique, un amateur de cuisine ou simplement à la recherche de nouvelles expériences, nos festivals sont conçus pour vous éblouir. Rejoignez-nous et vivez une expérience immersive où chaque moment est une célébration de la vie.",
    },
    {
      id: 3,
      name: "compitition",
      img: "/Business-competition.png",
      description:
        "Défiez-vous et excellez avec notre service de compétition ! Que vous aspiriez à la victoire, à la reconnaissance ou simplement à repousser vos limites, nos compétitions sont votre terrain de jeu idéal. Plongez dans l'excitation de la compétition, affrontez vos adversaires avec détermination et élevez-vous au-dessus du reste. Rejoignez-nous pour une aventure où le talent rencontre l'opportunité, et où chaque défi est une chance de briller. ",
    },
    {
      id: 4,
      name: "event scolaire",
      img: "/Images-pana.png",
      description:
        "Faites de chaque journée scolaire une expérience inoubliable ! Notre service d'événements scolaires transforme votre école en un lieu de découverte, de créativité et de camaraderie. Que ce soit pour une journée spéciale, une semaine thématique ou une célébration annuelle, nous sommes là pour rendre chaque moment aussi éducatif que passionnant. Offrez à vos élèves une éducation enrichissante au-delà des livres et des salles de classe, et laissez-nous créer des souvenirs qui dureront toute une vie.",
    },
    {
      id: 5,
      name: "sortie",
      img: "/Eating-together.png",
      description:
        "Évadez-vous de la routine quotidienne avec nos sorties sur mesure ! Notre service de sorties vous emmène dans des lieux extraordinaires, choisis selon vos préférences et vos intérêts. Que vous souhaitiez explorer la nature, découvrir des sites historiques, ou simplement vous détendre dans un cadre pittoresque, nous avons l'excursion parfaite pour vous. Rejoignez-nous pour une aventure où chaque destination est une nouvelle découverte, et chaque moment est une escapade mémorable.",
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
      return <ServiceCard service={service} key={service.id} />;
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
