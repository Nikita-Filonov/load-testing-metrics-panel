import { connect } from 'react-redux';
import { ReduxState } from '../../Redux/ReduxState';
import Box from '@mui/material/Box';
import { EmptyView } from '../../Components/Views/EmptyView';
import { FC, useEffect } from 'react';
import { useMethods } from '../../Providers/Results/MethodsProvider';
import { Service } from '../../Models/Services/Services';
import { Method } from '../../Models/Results/Methods';
import { ListView } from '../../Components/Views/ListView';
import { MethodView } from './MethodView';

type MethodsListViewProps = {
  service: Service;
  methods: Method[];
};

const MethodsListView: FC<MethodsListViewProps> = ({ service, methods }) => {
  const { loading, getMethods } = useMethods();

  useEffect(() => {
    service.name && getMethods({ service: service.name });
  }, [service.name]);

  return (
    <Box>
      {methods.length === 0 && !loading.getMethods && (
        <EmptyView
          title={'There is no methods'}
          description={'Methods results will be aggregated after uploading load tests result'}
        />
      )}
      <ListView loading={loading.getMethods}>
        {methods.map((method, index) => (
          <MethodView key={index} method={method} />
        ))}
      </ListView>
    </Box>
  );
};

const getState = (state: ReduxState) => ({
  methods: state.results.methods,
  service: state.services.service
});
export default connect(getState)(MethodsListView);
