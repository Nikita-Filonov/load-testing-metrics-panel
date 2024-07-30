import { FC, Fragment } from 'react';
import { BaseLabel } from '../../../Components/Labels/BaseLabel';
import { LoadTestResultCompareLabel } from '../../../Components/Labels/LoadTestResults/LoadTestResultCompareLabel';
import { LoadTestResult } from '../../../Models/Results/LoadTestResults';

type LoadTestResultLabelsViewProps = {
  result: LoadTestResult;
};

export const LoadTestResultLabelsView: FC<LoadTestResultLabelsViewProps> = ({ result }) => {
  return (
    <Fragment>
      {result.triggerCIProjectVersion && (
        <BaseLabel sx={{ mr: 1 }} color={'info'} label={result.triggerCIProjectVersion} />
      )}
      <LoadTestResultCompareLabel percent={result.compare?.totalRequestsPerSecondCompare} />
    </Fragment>
  );
};
