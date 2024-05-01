"use client";
import React from "react";
import { motion } from "framer-motion";
import { apiClient } from "@/app/api-costum";
import ServiceMiniCard from "./ServiceMiniCard";

const ServiceHero = () => {
  const servicess = [
    {
      id: 1,
      name: "anniversaire",
      description:
        "Célébrez les moments spéciaux avec éclat ! Notre service d'anniversaire est conçu pour transformer chaque année en un souvenir inoubliable. Offrez à vos proches une expérience mémorable, remplie de joie, de surprises et de souvenirs précieux. Laissez-nous orchestrer votre journée spéciale et transformons votre rêve d'anniversaire en réalité ",
    },
    {
      id: 2,
      name: "fistivale",
      description:
        "Plongez dans l'effervescence des festivals avec nous ! Notre service festival vous transporte dans un monde de divertissement, de musique, de gastronomie et de culture. Que vous soyez un passionné de musique, un amateur de cuisine ou simplement à la recherche de nouvelles expériences, nos festivals sont conçus pour vous éblouir. Rejoignez-nous et vivez une expérience immersive où chaque moment est une célébration de la vie.",
    },
    {
      id: 3,
      name: "compitition",
      description:
        "Défiez-vous et excellez avec notre service de compétition ! Que vous aspiriez à la victoire, à la reconnaissance ou simplement à repousser vos limites, nos compétitions sont votre terrain de jeu idéal. Plongez dans l'excitation de la compétition, affrontez vos adversaires avec détermination et élevez-vous au-dessus du reste. Rejoignez-nous pour une aventure où le talent rencontre l'opportunité, et où chaque défi est une chance de briller. ",
    },
    {
      id: 4,
      name: "event scolaire",
      description:
        "Faites de chaque journée scolaire une expérience inoubliable ! Notre service d'événements scolaires transforme votre école en un lieu de découverte, de créativité et de camaraderie. Que ce soit pour une journée spéciale, une semaine thématique ou une célébration annuelle, nous sommes là pour rendre chaque moment aussi éducatif que passionnant. Offrez à vos élèves une éducation enrichissante au-delà des livres et des salles de classe, et laissez-nous créer des souvenirs qui dureront toute une vie.",
    },
    {
      id: 5,
      name: "sortie",
      description:
        "Évadez-vous de la routine quotidienne avec nos sorties sur mesure ! Notre service de sorties vous emmène dans des lieux extraordinaires, choisis selon vos préférences et vos intérêts. Que vous souhaitiez explorer la nature, découvrir des sites historiques, ou simplement vous détendre dans un cadre pittoresque, nous avons l'excursion parfaite pour vous. Rejoignez-nous pour une aventure où chaque destination est une nouvelle découverte, et chaque moment est une escapade mémorable.",
    },
  ];
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  const displayService = () => {
    return servicess?.map((service) => {
      return <ServiceMiniCard service={service} />;
    });
  };
  return (
    <motion.section
      initial="initial"
      variants={variants}
      whileInView="inView"
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Trouvez votre service
            </h2>

            <p className="mt-4 text-gray-600">
              Créez des moments mémorables avec nous! Que ce soit pour un
              anniversaire, une compétition ou un festival, notre équipe
              expérimentée s'occupe de tout. Des événements impeccables, des
              souvenirs durables. Faites-nous confiance pour faire de votre
              vision une réalité!
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Commencez maintenant
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {displayService()}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceHero;
