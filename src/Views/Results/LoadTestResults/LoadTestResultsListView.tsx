import { useLoadTestResults } from '../../../Providers/Results/LoadTestResultsProvider';
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { BasePagination } from '../../../Components/Pagination/BasePagination';
import { connect } from 'react-redux';
import { ReduxState } from '../../../Redux/ReduxState';
import { LoadTestResultView } from './LoadTestResultView';
import { LoadTestResult } from '../../../Models/Results/LoadTestResults';
import { Service } from '../../../Models/Services/Services';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { ListView } from '../../../Components/Views/ListView';

type LoadTestResultsListViewProps = {
  service: Service;
  loadTestResults: LoadTestResult[];
  loadTestResultsTotal: number;
};

const limit = 20;

const LoadTestResultsListView: FC<LoadTestResultsListViewProps> = (props) => {
  const { service, loadTestResults, loadTestResultsTotal } = props;
  const { loading, getLoadTestResults } = useLoadTestResults();
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getLoadTestResults({ service: service.name, limit, offset });
  }, [offset, service.name]);

  return (
    <Box>
      {loadTestResults.length === 0 && !loading.getLoadTestResults && (
        <EmptyView
          title={'There is no results'}
          description={'Results from the load test pipeline will be displayed here'}
        />
      )}
      <ListView loading={loading.getLoadTestResults}>
        {loadTestResults.map((result) => (
          <LoadTestResultView key={result.id} result={result} />
        ))}
        <BasePagination
          page={page}
          total={loadTestResultsTotal}
          limit={limit}
          setPage={setPage}
          setOffset={setOffset}
        />
      </ListView>
    </Box>
  );
};

const getState = (state: ReduxState) => ({
  service: state.services.service,
  loadTestResults: state.results.loadTestResults,
  loadTestResultsTotal: state.results.loadTestResultsTotal
});
export default connect(getState)(LoadTestResultsListView);
