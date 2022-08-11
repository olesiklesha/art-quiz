import React from 'react';
import { SettingsHeader, SettingsForm } from '../../components';
import { SettingsWrapper } from './styles';

const Settings = () => {
  return (
    <SettingsWrapper>
      <SettingsHeader />
      <SettingsForm />
    </SettingsWrapper>
  );
};

export default Settings;
