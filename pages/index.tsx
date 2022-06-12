import type { GetServerSideProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import ClientProjects from "../components/ClientProjects";
import Header from "../components/header";
import HeroSection from "../components/hero";
import RecentProjects from "../components/projects";
import ServiceSection from "../components/service";
import Technologies from "../components/technologies";
import { CompanyInfoType, RecentProjectsType, TechnologyType } from "../interface";
import { getCompanyInfo, getRecentProjectData, getTechnologyData } from "../lib/app.lib";

type Props = {

  recentProjects: RecentProjectsType | null,
  loadingImage: string,
  technology: TechnologyType,
  companyInfo: CompanyInfoType | null

}

const Home = (props: Props) => {

  const { recentProjects, loadingImage, technology, companyInfo } = props
  return (
    <div data-bs-spy="scroll" data-bs-target="#header" data-bs-offset="0">
      <Header />
      <HeroSection companyInfo={companyInfo} />
      <ServiceSection />
      <ClientProjects recentProjects={recentProjects} loadingImage={loadingImage} />
      <Technologies technology={technology} />
      <RecentProjects recentProjects={recentProjects} loadingImage={loadingImage} />
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const { base64 } = await getPlaiceholder("/assets/loading.png");

  const recentProjects = await getRecentProjectData(`1`)
  const technology = await getTechnologyData('1')
  const companyInfo = await getCompanyInfo('1')

  return {
    props: {
      recentProjects: recentProjects.exists() ? recentProjects.data() : null,
      loadingImage: base64,
      technology,
      companyInfo

    },

  }

}

export default Home;
