import { BaseLabel } from '../BaseLabel';
import { FC } from 'react';

type LoadTestResultCompareLabelProps = {
  percent?: number;
};

export const LoadTestResultCompareLabel: FC<LoadTestResultCompareLabelProps> = ({ percent }) => {
  if (percent === undefined) {
    return <BaseLabel color={'warning'} label={'No info'} />;
  }

  if (percent > 0) {
    return <BaseLabel color={'success'} label={`Better on ${percent}%`} />;
  }

  if (percent < 0) {
    return <BaseLabel color={'error'} label={`Worse on ${percent}%`} />;
  }

  return <BaseLabel color={'warning'} label={'No difference'} />;
};
