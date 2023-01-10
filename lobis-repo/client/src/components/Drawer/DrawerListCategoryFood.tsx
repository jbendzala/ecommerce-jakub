import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import {
  LocalDining,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from '@mui/icons-material';
import React, { useState } from 'react';

export const DrawerListCategoryFood = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          height: 25,
          borderRadius: 2,
          ':hover': {
            backgroundColor: '#d4d5f235',
          },
        }}
      >
        <ListItemIcon>
          <LocalDining color='secondary' fontSize='small' />
        </ListItemIcon>
        <ListItemText
          primary='Potraviny'
          sx={{ color: (theme) => theme.palette.secondary.main }}
        />
        {open ? (
          <ExpandLess color='secondary' />
        ) : (
          <ExpandMore color='secondary' />
        )}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding sx={{ pl: 2 }}>
          <Stack spacing={1}>
            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                // pl: 4,
                height: 25,
                borderRadius: 2,
                ':hover': {
                  color: 'white',
                },
              }}
            >
              <ListItemIcon>
                <StarBorder color='secondary' />
              </ListItemIcon>
              <ListItemText
                primary='Starred'
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemButton>
          </Stack>
        </List>
      </Collapse>
    </>
  );
};
