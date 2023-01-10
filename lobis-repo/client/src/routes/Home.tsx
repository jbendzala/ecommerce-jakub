import { Stack } from '@mui/material';
import { Businesses } from '../components/Business/Businesses';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <Stack>
      <Header />
      <Businesses />
    </Stack>
  );
};
