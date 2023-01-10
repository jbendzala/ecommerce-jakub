import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from '../apiClient/apiClient';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledTextField } from '../components/UI/StyledTextField';
import { useNavigate } from 'react-router-dom';

const LoginSchema = () =>
  yup.object({
    username: yup.string().required('Uživatelské jméno je povinné'),
    password: yup.string().required('Heslo je povinné'),
  });

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { mutate: login } = useLogin();
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginSchema()),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = ({ username, password }) => {
    login(
      { username, password },
      {
        onSuccess: () => console.log('res'),
        onError: () => console.log('erorik'),
      }
    );
  };

  const handleRegistrationClick = (e) => {
    e.preventDefault();
    navigate('/registration');
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
          spacing={4}
          sx={{ m: 5 }}
        >
          <Typography
            variant='h4'
            sx={{ color: (theme) => theme.palette.primary.dark }}
          >
            Prosím přihlaste se
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Controller
                control={control}
                name='username'
                render={({ field, fieldState, formState }) => (
                  <StyledTextField
                    {...field}
                    label='Jméno'
                    variant='outlined'
                    size='small'
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error ? fieldState.error.message : undefined
                    }
                    inputProps={{
                      sx: {
                        color: (theme) => theme.palette.primary.dark,
                        backgroundColor: 'transparent !important',
                      },
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
                    label='Heslo'
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
                přihlásit se
              </Button>
            </Stack>
          </form>
          <Stack spacing={1}>
            <Button variant='text'>Zapomněli jste heslo?</Button>
            <Button variant='outlined' onClick={handleRegistrationClick}>
              Registrace
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
