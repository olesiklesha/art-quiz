import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants';
import { BtnSettings } from '../../styles';

const SettingsBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../' + AppRoutes.SETTINGS);
  };

  return <BtnSettings onClick={handleClick} />;
};

export default SettingsBtn;
