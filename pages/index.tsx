import type { NextPage } from "next";
import ClientProjects from "../components/ClientProjects";
import Header from "../components/header";
import HeroSection from "../components/hero";
import RecentProjects from "../components/projects";
import ServiceSection from "../components/service";
import Technologies from "../components/technologies";

const Home: NextPage = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="#header" data-bs-offset="0">
      <Header />
      <HeroSection />
      <ServiceSection />
      <ClientProjects />
      <Technologies />
      <RecentProjects />
    </div>
  );
};

export default Home;
