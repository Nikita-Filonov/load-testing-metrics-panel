import { Grid, Typography } from '@mui/material';
import { BaseCard } from '../../Components/Cards/BaseCard';
import { Method } from '../../Models/Results/Methods';
import { FC } from 'react';
import { useAppNavigationService } from '../../Services/HookServices/AppNavigationServiceHook';
import { AppRoutes } from '../../Services/Constants/Routing';
import { BaseLabel } from '../../Components/Labels/BaseLabel';

type MethodViewProps = {
  method: Method;
};

export const MethodView: FC<MethodViewProps> = ({ method }) => {
  const { onNavigate } = useAppNavigationService();

  const onViewDetails = () => {
    onNavigate(AppRoutes.MethodsDetails, { method: encodeURIComponent(method.method) });
  };

  return (
    <BaseCard actions={[{ title: 'View details', onClick: onViewDetails }]}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Typography variant={'subtitle1'}>{method.method}</Typography>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'flex-end'}>
          <BaseLabel color={'info'} label={'GRPC'} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            <b>Average requests/s:</b> {method.averageRequestsPerSecond}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            <b>Average number of requests:</b> {method.averageNumberOfRequests}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            <b>Average response time:</b> {method.averageResponseTime}
          </Typography>
        </Grid>
      </Grid>
    </BaseCard>
  );
};
