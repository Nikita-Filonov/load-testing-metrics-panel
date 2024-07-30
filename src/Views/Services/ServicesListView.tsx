import List from '@mui/material/List';
import { connect, useDispatch } from 'react-redux';
import { ReduxState } from '../../Redux/ReduxState';
import { Service } from '../../Models/Services/Services';
import { FC, useEffect } from 'react';
import { ServiceListItem } from '../../Components/ListItems/Services/ServiceListItem';
import { useServices } from '../../Providers/Services/ServicesProvider';
import { setService } from '../../Redux/Services/ServicesSlice';
import { BoxView } from '../../Components/Views/BoxView';

type ServicesListViewProps = {
  service: Service;
  services: Service[];
};

const ServicesListView: FC<ServicesListViewProps> = ({ service, services }) => {
  const dispatch = useDispatch();
  const { loading, getServices } = useServices();

  useEffect(() => {
    getServices();
  }, []);

  const onSelectService = (service: Service) => dispatch(setService(service));

  return (
    <BoxView title={'Services'} loading={loading.getServices}>
      <List dense>
        {services.map((item, index) => (
          <ServiceListItem
            key={index}
            service={item}
            selected={item.name == service.name}
            onSelectService={onSelectService}
          />
        ))}
      </List>
    </BoxView>
  );
};

const getState = (state: ReduxState) => ({
  service: state.services.service,
  services: state.services.services
});
export default connect(getState)(ServicesListView);
