import './App.css';
import React from 'react';
import { Stack, ThemeProvider } from '@mui/material';
import { Header } from './components/Header';
import theme from './theme/theme';
import { Businesses } from './components/Business/Businesses';
import { Home } from './routes/Home';
import { AppRoutes } from './routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className='bg'>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
