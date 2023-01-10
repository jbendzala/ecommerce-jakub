import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleRegistrationClick = (e) => {
    e.preventDefault();
    navigate('/registration');
  };

  return (
    <>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='avatar-menu'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <AccountCircle fontSize='large' color='secondary' />
      </IconButton>
      <Menu
        id='avatar-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          mt: 6,
          ml: -2,
        }}
        PaperProps={{
          sx: {
            backgroundColor: (theme) => theme.palette.secondary.light,
          },
        }}
      >
        <MenuItem onClick={handleLoginClick}>Přihlášení</MenuItem>
        <MenuItem onClick={handleRegistrationClick}>Registrace</MenuItem>
      </Menu>
    </>
  );
};
