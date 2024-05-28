import GroupedBuildsGraph from '../components/Graph/GroupedBuildsGraph';
import Title, { TitleSize } from '../components/Title/Title';
import { useAppSelector } from '../store/hooks';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import BuildsTable from '../components/BuildsTable/BuildsTable';

function Home() {
  const isLoading = useAppSelector((state) => state.buildReducer.loading);
  const errorBuildFetch = useAppSelector((state) => state.buildReducer.error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorBuildFetch) {
    return <div>Error fetching builds: {errorBuildFetch}</div>;
  }

  return (
    <>
      <LanguageSelector />
      <Title text="Vite + React" size={TitleSize.H1} className="text-nowrap" />
      <GroupedBuildsGraph />
      <BuildsTable />
    </>
  );
}

export default Home;