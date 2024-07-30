import { Button } from '@mui/material';
import { ActionsView } from '../../../Components/Views/ActionsView';
import { LoadTestResultDetails } from '../../../Models/Results/LoadTestResults';
import { FC } from 'react';
import { formatRouteTemplate } from '../../../Services/HookServices/AppNavigationServiceHook';
import { AppRoutes } from '../../../Services/Constants/Routing';

type LoadTestResultActionsProps = {
  details: LoadTestResultDetails;
};

export const LoadTestResultActions: FC<LoadTestResultActionsProps> = ({ details }) => {
  const onViewPreviousResult = () => {
    if (details.compare?.previousId) {
      const url = formatRouteTemplate(AppRoutes.ResultDetails, { loadTestResultId: details.compare?.previousId });
      window.open(url, '_blank');
    }
  };

  const onOpenTriggerPipeline = () => {
    details.triggerCIPipelineUrl && window.open(details.triggerCIPipelineUrl, '_blank');
  };

  const onOpenLoadTestsPipeline = () => {
    details.loadTestsCIPipelineUrl && window.open(details.loadTestsCIPipelineUrl, '_blank');
  };

  return (
    <ActionsView>
      <Button variant={'outlined'} onClick={onViewPreviousResult} disabled={!details.compare?.previousId}>
        View previous result
      </Button>
      <Button variant={'outlined'} onClick={onOpenTriggerPipeline} disabled={!details.triggerCIPipelineUrl}>
        Open trigger pipeline
      </Button>
      <Button variant={'outlined'} onClick={onOpenLoadTestsPipeline} disabled={!details.loadTestsCIPipelineUrl}>
        Open load tests pipeline
      </Button>
    </ActionsView>
  );
};
