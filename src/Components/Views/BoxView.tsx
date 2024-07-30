import Typography from '@mui/material/Typography';
import { LoadingView } from './LoadingView';
import Box from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';

type BoxViewProps = {
  title: string;
  loading?: boolean;
} & PropsWithChildren;

export const BoxView: FC<BoxViewProps> = ({ title, loading, children }) => {
  return (
    <Box>
      <Typography sx={{ mt: 3 }} fontWeight={'bold'}>
        {title}
      </Typography>
      {loading ? <LoadingView height={200} /> : children}
    </Box>
  );
};
