import { MainLayout } from '../../Components/Layouts/MainLayouts';
import { useParams } from 'react-router-dom';
import { MethodsProvider } from '../../Providers/Results/MethodsProvider';
import MethodDetailsView from '../../Views/Methods/MethodDetailsView';
import { MethodsAnalyticsProvider } from '../../Providers/Analytics/MethodsAnalyticsProvider';
import MethodChartsView from '../../Views/Methods/MethodChartsView';

type Params = {
  method: string;
};

const MethodDetailsPage = () => {
  const { method } = useParams<Params>();

  return (
    <MainLayout>
      {method && (
        <MethodsProvider>
          <MethodDetailsView method={method} />
        </MethodsProvider>
      )}
      {method && (
        <MethodsAnalyticsProvider>
          <MethodChartsView method={method} />
        </MethodsAnalyticsProvider>
      )}
    </MainLayout>
  );
};

export default MethodDetailsPage;
