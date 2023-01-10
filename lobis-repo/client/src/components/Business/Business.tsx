import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import './Businesses.css';

type Props = {
  text: string;
};

export const Business = ({ text }: Props) => {
  return (
    <Card
      elevation={3}
      sx={{
        width: 300,
        backgroundColor: 'rgba(255,255,255,.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: (theme) => theme.palette.primary.main,
        borderRadius: 4,
        mb: 4,
        mx: 1,
        ':hover': {
          boxShadow: 9,
          backgroundColor: '#d4d4fa',
          transition: '250ms',
          transitionDelay: 'inherit',
        },
      }}
    >
      <CardActionArea disableRipple sx={{ p: 2 }}>
        <CardMedia
          component='img'
          image='./elavi.png'
          alt='alt'
          height={180}
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant='h4' color='primary.dark'>
              Lorem Ipsum
            </Typography>
            <Typography variant='body2' color='primary'>
              {text}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
