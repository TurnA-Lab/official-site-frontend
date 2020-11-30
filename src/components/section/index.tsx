import React from 'react';
import { Grid } from '@geist-ui/react';

const Section = ({ children }: { children: React.ReactNode }) => (
  <Grid.Container justify="center">
    <Grid md={18} justify="center">
      {children}
    </Grid>
  </Grid.Container>
);

export { Section };
