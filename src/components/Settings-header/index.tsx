import React, { useCallback } from 'react';
import { BtnBack } from '../../styles';
import { useNavigate } from 'react-router-dom';
import { Header, Title } from './styles';

const SettingsHeader = () => {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Header>
      <BtnBack onClick={goBack} isSet={true} />
      <Title>Settings</Title>
    </Header>
  );
};

export default SettingsHeader;
