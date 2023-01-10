import React from 'react';
import { Stack, Typography, Drawer, Divider } from '@mui/material';
import { DrawerList } from './DrawerList';

const drawerWidth = 240;

interface Props {
  drawerOpen: boolean;
}

export const ResponsiveDrawer = ({ drawerOpen }: Props) => {
  return (
    <Drawer
      variant='persistent'
      sx={{
        // display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
      elevation={5}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      }}
      open={drawerOpen}
    >
      <Stack spacing={1} sx={{ mt: 10, mx: 2 }}>
        <Typography variant='h6' color='secondary'>
          Kategorie
        </Typography>
        <Divider
          sx={{ backgroundColor: (theme) => theme.palette.secondary.dark }}
        />
        <DrawerList />
      </Stack>
    </Drawer>
  );
};
