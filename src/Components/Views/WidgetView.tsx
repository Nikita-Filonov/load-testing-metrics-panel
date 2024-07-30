import { BasePaper } from './BasePaper';
import Typography from '@mui/material/Typography';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { LoadingView } from './LoadingView';
import { Box, Paper, SxProps, Theme } from '@mui/material';

type WidgetViewProps = {
  sx?: SxProps<Theme>;
  flat?: boolean;
  title?: string | ReactNode;
  label?: ReactNode;
  height?: number;
  loading?: boolean;
  children: ReactNode;
};

type ContainerProps = {
  sx?: SxProps<Theme>;
  flat: boolean;
} & PropsWithChildren;

const Container: FC<ContainerProps> = (props) => {
  const { sx, flat, children } = props;

  return flat ? (
    <Paper sx={{ ...sx, bgcolor: 'inherit' }} elevation={0}>
      {children}
    </Paper>
  ) : (
    <BasePaper sx={sx}>{children}</BasePaper>
  );
};

export const WidgetView: FC<WidgetViewProps> = (props) => {
  const { sx, flat = false, title, label, height = 300, loading, children } = props;

  return (
    <Container sx={sx} flat={flat}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {title && (
          <Typography sx={{ mr: 2 }} variant={'h6'}>
            {title}
          </Typography>
        )}
        {label}
        <Box sx={{ flexGrow: 1 }} />
      </Box>
      {loading ? <LoadingView height={height} /> : children}
    </Container>
  );
};
