import { Box, Grid } from '@mui/material';
import { WidgetView } from './WidgetView';
import { Children, FC, PropsWithChildren, ReactNode } from 'react';

type ActionsViewProps = {
  widget?: boolean;
  children: ReactNode[] | ReactNode;
};

type ContainerProps = {
  widget?: boolean;
} & PropsWithChildren;

const Container: FC<ContainerProps> = ({ widget, children }) => {
  return widget ? (
    <WidgetView sx={{ mt: 2 }} title={'Actions'}>
      {children}
    </WidgetView>
  ) : (
    <Box sx={{ mt: 2 }}>{children}</Box>
  );
};

export const ActionsView: FC<ActionsViewProps> = ({ widget = true, children }) => {
  return (
    <Container widget={widget}>
      <Grid sx={{ mt: 0 }} container spacing={2}>
        {Children.map(
          children,
          (child, index) =>
            child && (
              <Grid key={index} item>
                {child}
              </Grid>
            )
        )}
      </Grid>
    </Container>
  );
};
