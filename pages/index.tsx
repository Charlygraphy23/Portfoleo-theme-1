/* eslint-disable prettier/prettier */
import type { GetServerSideProps } from 'next';
import ClientProjects from '../components/ClientProjects';
import Header from '../components/header';
import HeroSection from '../components/hero';
import RecentProjects from '../components/projects';
import ServiceSection from '../components/service';
import Technologies from '../components/technologies';
import {
  CompanyInfoType,
  RecentProjectsType,
  TechnologyType
} from '../interface';
import {
  getCompanyInfo,
  getRecentProjectData,
  getTechnologyData
} from '../lib/app.lib';

type Props = {
  recentProjects: RecentProjectsType | null;
  technology: TechnologyType;
  companyInfo: CompanyInfoType | null;
};

const Home = (props: Props) => {
  const { recentProjects, technology, companyInfo } = props;
  return (
    <div data-bs-spy='scroll' data-bs-target='#header' data-bs-offset='0'>
      <Header />
      <HeroSection companyInfo={companyInfo} />
      <ServiceSection />
      <ClientProjects
        recentProjects={recentProjects}
        loadingImage='/assets/loading.png'
      />
      <Technologies technology={technology} />
      <RecentProjects
        recentProjects={recentProjects}
        loadingImage='/assets/loading.png'
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {



  const recentProjects = await getRecentProjectData('1');
  const technology = await getTechnologyData('1');
  const companyInfo = await getCompanyInfo('1');

  return {
    props: {
      recentProjects: recentProjects.exists() ? recentProjects.data() : null,
      technology,
      companyInfo,
    },
  };
};

export default Home;
