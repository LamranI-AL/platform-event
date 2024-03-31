// import Image from "next/image";s
import EventList from "./_components/EventList";
import Hero from "./_components/Hero";
import ServiceList from "./_components/ServiceList";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventList />
      <ServiceList />
    </main>
  );
}
