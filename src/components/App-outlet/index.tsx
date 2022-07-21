import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../../styles';
import AppHeader from '../App-header';

const AppOutlet = () => {
  return (
    <Wrapper>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default AppOutlet;
