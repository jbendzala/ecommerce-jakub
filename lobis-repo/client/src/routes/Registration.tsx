import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRegistration } from '../apiClient/apiClient';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledTextField } from '../components/UI/StyledTextField';
import { useNavigate } from 'react-router-dom';

const LoginSchema = () =>
  yup.object({
    username: yup.string().required('Uživatelské jméno je povinné'),
    password: yup.string().required('Heslo je povinné'),
    email: yup.string(),
    phone: yup
      .number()
      .min(10000000, 'At least 8 characters')
      .max(
        10000000000000000,
        'Phone number cannot have more than 17 characters'
      )
      .nullable(),
  });

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { mutate: registration } = useRegistration();
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginSchema()),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      phone: null,
    },
  });

  const onSubmit = ({ username, password, email, phone }) => {
    registration(
      { username, password, email, phone },
      {
        onSuccess: (res) => console.log(res),
        onError: () => console.log('erorik'),
      }
    );
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      spacing={5}
      sx={{ m: 5 }}
    >
      <Stack spacing={2} alignItems='center' justifyContent='center'>
        <Typography variant='h2' color='primary'>
          Logo Locus
        </Typography>
        <Typography variant='h3' color='primary'>
          Vítejte
        </Typography>
      </Stack>
      <Paper
        variant='outlined'
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '50px',
          borderWidth: '2px',
          borderColor: (theme) => theme.palette.primary.main,
          width: '60%',
          color: (theme) => theme.palette.primary.light,
        }}
      >
        <Stack
          alignItems='center'
          justifyContent='center'
          spacing={5}
          sx={{ m: 5 }}
        >
          <Typography
            variant='h4'
            sx={{ color: (theme) => theme.palette.primary.dark }}
          >
            Vyplňte prosím údaje
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Controller
                control={control}
                name='username'
                render={({ field, fieldState, formState }) => (
                  <StyledTextField
                    {...field}
                    label='Jméno *'
                    variant='outlined'
                    size='small'
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error ? fieldState.error.message : undefined
                    }
                    inputProps={{
                      sx: { color: (theme) => theme.palette.primary.dark },
                    }}
                    InputLabelProps={{
                      sx: { color: (theme) => theme.palette.primary.main },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name='email'
                render={({ field, fieldState, formState }) => (
                  <StyledTextField
                    {...field}
                    label='Email'
                    variant='outlined'
                    size='small'
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error ? fieldState.error.message : undefined
                    }
                    inputProps={{
                      sx: { color: (theme) => theme.palette.primary.dark },
                    }}
                    InputLabelProps={{
                      sx: { color: (theme) => theme.palette.primary.main },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name='phone'
                render={({ field, fieldState, formState }) => (
                  <StyledTextField
                    {...field}
                    type='number'
                    // type='tel'
                    label='Telefonní číslo'
                    variant='outlined'
                    size='small'
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error ? fieldState.error.message : undefined
                    }
                    inputProps={{
                      sx: { color: (theme) => theme.palette.primary.dark },
                    }}
                    InputLabelProps={{
                      sx: { color: (theme) => theme.palette.primary.main },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name='password'
                render={({ field, fieldState, formState }) => (
                  <StyledTextField
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    label='Heslo *'
                    variant='outlined'
                    autoComplete='new-password'
                    size='small'
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error ? fieldState.error.message : undefined
                    }
                    inputProps={{
                      sx: { color: (theme) => theme.palette.primary.dark },
                    }}
                    InputLabelProps={{
                      sx: { color: (theme) => theme.palette.primary.main },
                    }}
                    InputProps={{
                      sx: { color: (theme) => theme.palette.secondary.main },
                      endAdornment: (
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={() => setShowPassword(!showPassword)}
                          edge='end'
                          data-cy='show-password-toggler'
                          sx={{
                            '&:hover': {
                              backgroundColor: 'secondary.dark',
                            },
                          }}
                        >
                          {showPassword ? (
                            <VisibilityOff
                              fontSize='small'
                              sx={{
                                color: 'primary.dark',
                                '&:hover': {
                                  color: 'primary.light',
                                  transition: 'smooth',
                                },
                              }}
                              data-cy='eye-off'
                            />
                          ) : (
                            <Visibility
                              fontSize='small'
                              sx={{
                                color: 'primary.dark',
                                '&:hover': {
                                  color: 'primary.light',
                                  transition: 'smooth',
                                },
                              }}
                              data-testid='eye-on'
                            />
                          )}
                        </IconButton>
                      ),
                    }}
                  />
                )}
              />

              <Button variant='contained' type='submit'>
                Registrovat se
              </Button>
            </Stack>
          </form>
          <Button variant='text' onClick={handleLoginClick}>
            máte již účet?
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};
