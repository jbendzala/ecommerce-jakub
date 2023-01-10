import { AppBar, Button, IconButton, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AvatarMenu } from './AvatarMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { ResponsiveDrawer } from './Drawer/Drawer';
import { useWindowSize } from '../hooks/useWindowSize';

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 577) {
      setDrawerOpen(false);
    }
    if (windowSize.width > 576) {
      setDrawerOpen(true);
    }
  }, [windowSize.width]);

  return (
    <>
      <AppBar
        color='primary'
        sx={{ height: 64, justifyContent: 'center', zIndex: 1201 }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ px: 2 }}
        >
          <Stack direction='row' justifyContent='start'>
            <Button variant='outlined' color='secondary'>
              Test
            </Button>
            {windowSize.width < 577 && (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon fontSize='large' />
              </IconButton>
            )}
          </Stack>
          <AvatarMenu />
        </Stack>
      </AppBar>
      <ResponsiveDrawer drawerOpen={drawerOpen} />
    </>
  );
};
