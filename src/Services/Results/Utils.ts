import { LoadTestResult } from '../../Models/Results/LoadTestResults';

export const getLoadTestResultTitle = (result: LoadTestResult): string => {
  if (result.triggerCIProjectVersion) {
    return `Load tests for ${result.service} ${result.triggerCIProjectVersion}`;
  }

  return `Load tests for ${result.service}`;
};
