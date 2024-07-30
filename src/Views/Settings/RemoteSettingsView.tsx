import { WidgetView } from '../../Components/Views/WidgetView';
import ServicesListView from '../Services/ServicesListView';
import { ServicesProvider } from '../../Providers/Services/ServicesProvider';

export const RemoteSettingsView = () => {
  return (
    <WidgetView flat sx={{ mt: 3 }} title={'Remote settings'}>
      <ServicesProvider>
        <ServicesListView />
      </ServicesProvider>
    </WidgetView>
  );
};
