import type { NextPage } from "next";
import ClientProjects from "../components/ClientProjects";
import Header from "../components/header";
import HeroSection from "../components/hero";
import RecentProjects from "../components/projects";
import ServiceSection from "../components/service";
import Technologies from "../components/technologies";

const Home: NextPage = () => {
  return (
    <div>
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
