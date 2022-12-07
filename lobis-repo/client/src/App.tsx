import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/').then((res) => console.log(res));
  });

  return <div className='firstdiv'>Legendarna ecommerce appka</div>;
};

export default App;
