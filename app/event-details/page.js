"use client";
import BreadCrum from "@/app/_components/BreadCrum";
import { apiClient } from "@/app/api-costum";
import React, { useEffect, useState } from "react";
import ProductHero from "./_components/ProductHero";
import ProductSeggestion from "./_components/ProductSeggestion";

const page = () => {
  const eventts = [
    {
      _id: {
        $oid: "65df3e8b80120bcd7dfd41db",
      },
      name: "Tech Day V2.0",
      description:
        " la deuxième édition de l'événement Microsoft sur le thème de l'it et dev en utilisant les dernières technologies de Microsoft. Le club Quark et le club industrie4.0 inaugurera l'événement en accueillant l'un des experts de Microsoft qui guidera pas à pas les conférences. De plus, ils partageront avec les participants leurs parcours professionnels et expériences, avec une surprise spéciale annonçant les dernières innovations introduites par Microsoft, notamment dans les domaines de l'it et du développement. L'occasion se déroulera le 17 février. L'ENSABM invitera un groupe de représentants des villes de la région de Béni Mellal-Kénitra et d'autres de différentes villes de différentes régions, incluant présidents, professeurs, chefs d'entreprise, ingénieurs, banquiers et spécialistes du marketing. Partage, développement, passion et innovation sont les mots-clés de cet événement. Notre objectif principal est de promouvoir les compétences des jeunes Marocains intéressés par l'it à travers leur sens de la créativité et leur capacité à relever tous les défis afin de créer et innover confortablement.",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65df3ee880120bcd7dfd41dc",
      },
      name: "WORKSHOP",
      description:
        "Cet événement promet une immersion instructive dans le monde de la programmation et du développement, tout en offrant des conseils pratiques pour votre future carrière dans le domaine. Nous sommes impatients de vous accueillir à nouveau, chers informaticiens 🧑‍💻\nRavi de vous annoncer notre collaboration avec le club @industrie__4.0 ! Rejoignez-nous dans cette aventure passionnante 🔥",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e328e1b2fe632c4a63fd45",
      },
      name: "BEYOND THE HORIZON V3.0",
      description:
        "Embarking on a captivating scientific odyssey with Club Quark and a team of esteemed professors and experts at the trappist observatory in oukaimden. Amidst the majestic mountains, our journey unfolded with the revelation of telescopic wonders, delving into the vast mysteries of the cosmos. Engaging conferences on astronomy turned the landscape into our open-air classroom, where discussions illuminated celestial secrets. As the sun bid adieu, painting the sky in hues of twilight, we seamlessly transitioned into a time of camaraderie, forging connections and reveling in the astronomical marvels. Oukaimden, a realm of discovery, etched indelible memories beneath the glittering tapestry of the universe 🪐✨",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e3295bb2fe632c4a63fd46",
      },
      name: "rabat festival",
      description:
        "Embark on a three-day odyssey in Rabat from the 4th to the 6th of May, where the realms of astronomy, mathematics and physics converged in a celebration of knowledge and exploration! This extraordinary event unfolded with an array of workshops hosted by renowned engineering schools, each offering a hands-on journey into the intricacies of various disciplines.The city buzzed with the intellectual fervor as experts and enthusiasts alike delved into conferences that unveiled the latest breakthroughs and theories in astronomy, mathematics, and physics. From unraveling the mysteries of the cosmos to navigating the complexities of mathematical algorithms, every session was a stepping stone in our collective quest for understanding the universe. 😍",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e32a08b2fe632c4a63fd47",
      },
      name: "Tech Day V1.0",
      description:
        "Le club Quark souffle sa première bougie et organise sa 1ère edition sous le thème It et Dev en se servant des dernières technologies de Microsoft . Notre club a fait appel à des experts de Microsoft qui se déplaceront de l’étranger pour animer des conférences . Ces derniers vont venir avec leur expertise et leur savoir faire pour partager avec les participants leurs expériences et leur parcours professionnel et surtout leur annoncer les dernières innovations introduites par Microsoft en matière de technologie et précisément dans l’It et le Développement🖥️.",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e337deb2fe632c4a63fd48",
      },
      name: "Astro Day FES",
      description:
        " ASTRONOMY DAY 6 AT ENSA FEZ 🎉\n📅 Mark your calendars for 24/02/2024 as we embark on a journey through the wonders of the universe! 🌠\nJoin us for a day filled with celestial marvels, captivating presentations, and hands-on activities that will ignite your passion for the cosmos! 🌟✨\nExplore the mysteries of distant galaxies, marvel at the beauty of our solar system, and dive into the fascinating world of astrophysics. 🌌💫\n\nWhether you’re a seasoned astronomer or just beginning your cosmic voyage, Astronomy Day at ENSA Fez promises an unforgettable experience for all! 🚀🌙",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e33958b2fe632c4a63fd49",
      },
      name: "Tech day2 V1.0",
      description:
        " M. Yassine Driouich, notre inspirant Senior DotNet Developer & MVP Microsoft, est de retour à l'ENSA BM pour une journée 100% informatique. Rejoignez-nous pour une conférence et un workshop où il partagera les premières étapes de la programmation, la création d'un clean code, les design patterns essentiels, Git, l'agilité, ainsi que les technologies en demande sur le marché du travail.\nMais ce n'est pas tout ! M. Yassine vous fera vivre son expérience dans le monde professionnel avec sa spécialité .NET. L'événement culminera avec un workshop 100% pratique, axé sur la création d'une application à l'aide d'ASP.NET Core Web API (DotNet8).",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e339e9b2fe632c4a63fd4a",
      },
      name: "BEYOND THE HORIZON V2.0",
      description:
        " La sortie la plus attendue et tant espérée de l’année est enfin arrivée ! ✨Préparez-vous à être époustouflé lors de « BEYOND THE HORIZON V.2 » à Oukaimden, Marrakech, le 9 et 10 décembre 2022. C’est le moment où le ciel se transforme en une scène enchanteresse, où chaque étoile devient une danseuse flamboyante pour vous faire vivre les meilleurs souvenirs de votre vie et vous détendre du stress des études et contrôles .🌟",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e33b48b2fe632c4a63fd4b",
      },
      name: "Équipe technique Retro",
      description:
        "On vous présente cette fois-ci l’équipe technique👨‍🔧.Cette équipe qui regroupe plus ce que 90 étudiants dans 3 cellules (programmation, design, marketing). Le choix de ces équipes a été fait pour donner l’opportunité aux futurs ingénieurs de l’ENSABM à développer leurs hard skills et approfondir leurs connaissances dans le domaine informatique, la création artistique et l’entrepreneuriat 🦾. Pour cela, plusieurs ateliers ont été organisés pour créer un atmosphère d’échange entre les étudiants de notre école afin de partager leurs expériences et leurs connaissances. Les adhérents du club ont bénéficié d’une formation de Python 🐍 d’une formation dans le marketing digital 📈… Un grand merci à tout nos partenaires qui nous ont aidé afin d’arriver à nos but et à tout ce succès.We are the best 💜🤍 ",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e33ccbb2fe632c4a63fd4c",
      },
      name: "Équipe technique Retro2",
      description:
        "On vous présente cette fois-ci l’équipe technique👨‍🔧.Cette équipe qui regroupe plus ce que 90 étudiants dans 3 cellules (programmation, design, marketing). Le choix de ces équipes a été fait pour donner l’opportunité aux futurs ingénieurs de l’ENSABM à développer leurs hard skills et approfondir leurs connaissances dans le domaine informatique, la création artistique et l’entrepreneuriat 🦾. Pour cela, plusieurs ateliers ont été organisés pour créer un atmosphère d’échange entre les étudiants de notre école afin de partager leurs expériences et leurs connaissances. Les adhérents du club ont bénéficié d’une formation de Python 🐍 d’une formation dans le marketing digital 📈… Un grand merci à tout nos partenaires qui nous ont aidé afin d’arriver à nos but et à tout ce succès.We are the best 💜🤍 ",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
    {
      _id: {
        $oid: "65e33d54b2fe632c4a63fd4d",
      },
      name: "L'equipe de créativité Retro",
      description:
        "L'equipe de créativité nous étonne chaque fois avec ses activités uniques et fascinantes. Cette fois-ci, c'était une activité à 100% artistique. Un atelier de peinture a été organisé par l'équipe, en dehors de notre école et exactement à Ain asserdoune. La nature, la beauté du lieu a inspiré les peintres et leur a permis d'ajouter une touche particulière sur leurs tableaux. Les participants ont bénéficié de tout le matériel dont ils avaient besoin afin d'assurer le succès et la réussite de l'activité. Des tableaux avec des différents sujet à touche naturel astronomique et artistique, chacun a dessiné son propre tableau et s'est exprimé librement. On tient à dire Un grand merci pour les participants et surtout pour les bureau du Club Quark qui a fait de son mieux pour la reussite de l'activité. On est vraiment fier de vous.\nWe are the best !💜🤍",
      imgUrl:
        "https://lovely-horses-0fb3c65a2e.media.strapiapp.com/IMG_20230220_WA_0014_56d9953253.jpg",
    },
  ];
  // const [event, setEvent] = useState({});
  // const [events, setEvents] = useState([]);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   displayEventById(params?.eventsId);
  // }, []);
  // const getEventsFilted = (category) => {
  //   apiClient.get(`/event`).then(async (data) => {
  //     const tempTable = data.data;
  //     console.log(tempTable);
  //     setEvents(tempTable);
  //   });
  // };
  // const displayEventById = (id) => {
  //   apiClient
  //     .get(`/event`)
  //     .then((res) => {
  //       console.log(res.data);
  //       // const tempTable = res?.data;
  //       // setEvent(tempTable);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // };
  // getEventsFilted(event);

  return (
    <div>
      <div class="justify-center m-4">
        <BreadCrum actuellPath={"Event-details"} ancienPath={`Home`} />
      </div>
      {/* {event?.length !== 0 && <ProductHero event={event} />} */}
      <ProductSeggestion events={eventts} />
    </div>
  );
};

export default page;
