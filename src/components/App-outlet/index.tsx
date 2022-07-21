import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../../styles';
import { AppHeader } from '..';
import { AppMain } from './styles';

const AppOutlet = () => {
  return (
    <Wrapper>
      <AppHeader />
      <AppMain>
        <Outlet />
      </AppMain>
    </Wrapper>
  );
};

export default AppOutlet;
