import { Stack } from '@mui/system';
import React from 'react';
import { Business } from './Business';
import './Businesses.css';

export const Businesses = () => {
  return (
    <Stack
      sx={{ alignItems: ' center', justifyContent: 'center', pt: 10, pb: 5 }}
    >
      <div className='masonry'>
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              ullamcorper nibh lacinia fringilla. Integer id augue at purus
              elementum volutpat. Maecenas in magna id dui vehicula pulvinar vel
              sed leo. Curabitur sagittis dolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              sed leo. Curabitur sagittis dolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              ullamcorper nibh lacinia fringilla. Integer id augue at purus
              elementum volutpat. Maecenas in magna id dui vehicula puldolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              ullamcorper nibh lacinia fringilla. Integer id augue at purus
              sed leo. Curabitur sagittis dolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              ullamcorper nibh lacinia fringilla. Integer id augue at purus
              elementum volutpat. Maecenas in magna id dui vehicula pulvinar vel
              sed leo. Curabitur sagittis dolo lementum volutpat. Maecenas in 
              magna id dui vehicula pulvinar velr diam, sed porttitor mauris porta'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              ullamcorper nibh lacinia fringilla. Integer id augue at purus
              elementum volutpat. Maecenas in magna id dui vehicula pulvinar vel
              elementum volutpat. Maecenas in magna id dui vehicula pulvinar vel
              sed leo. Curabitur sagittis dolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              ullamcorper nibh lacinia fringilla. Integer id augue at purus
              elementum volutpat. Maecenas in magna id dui vehicula pulvinar vel
              sed leo. Curabitur sagittis dolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
        <Business
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ultricies non felis sit amet mattis. Integer tempor arcu
              sed leo. Curabitur sagittis dolor diam, sed porttitor mauris porta
              commodo. Nulla at.'
        />
      </div>
    </Stack>
  );
};
