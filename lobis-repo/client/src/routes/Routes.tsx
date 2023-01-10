import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Registration } from './Registration';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
