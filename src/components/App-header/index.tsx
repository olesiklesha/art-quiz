import React, { useEffect, useState } from 'react';
import { Header, AppNav, Logo, NavItem } from './styles';
import { SettingsBtn } from '../index';
import { AppRoutes } from '../../constants';
import { useLocation } from 'react-router-dom';

const AppHeader = () => {
  const [path, setPath] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === AppRoutes.PIC) setPath(AppRoutes.PIC);
    if (pathname === AppRoutes.ART) setPath(AppRoutes.ART);
  }, [pathname]);

  return (
    <Header>
      <Logo />
      <AppNav>
        <NavItem to={AppRoutes.MAIN}>Home</NavItem>
        <NavItem to={path}>Categories</NavItem>
        <NavItem to={AppRoutes.RESULTS}>Result</NavItem>
      </AppNav>
      <SettingsBtn />
    </Header>
  );
};

export default AppHeader;
