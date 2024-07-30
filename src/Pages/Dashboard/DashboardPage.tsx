import { MainLayout } from '../../Components/Layouts/MainLayouts';
import DashboardChartsView from '../../Views/Dashboard/DashboardChartsView';
import { ResultsAnalyticsProvider } from '../../Providers/Analytics/ResultsAnalyticsProvider';

const DashboardPage = () => {
  return (
    <MainLayout>
      <ResultsAnalyticsProvider>
        <DashboardChartsView />
      </ResultsAnalyticsProvider>
    </MainLayout>
  );
};

export default DashboardPage;
