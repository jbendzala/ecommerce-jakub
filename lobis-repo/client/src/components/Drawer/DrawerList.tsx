import { List } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { DrawerListCategoryFood } from './DrawerListCategoryFood';
import { DrawerListCategoryLessons } from './DrawerListCategoryLessons';

export const DrawerList = () => (
  <List sx={{ width: '100%', maxWidth: 360 }} component='nav'>
    <Stack spacing={1}>
      <DrawerListCategoryFood />
      <DrawerListCategoryLessons />
    </Stack>
  </List>
);
