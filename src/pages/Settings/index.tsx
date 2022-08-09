import React from 'react';
import { Wrapper } from '../../components/Game-dialog/styles';
import { SettingsHeader, SettingsForm } from '../../components';

const Settings = () => {
  return (
    <Wrapper>
      <SettingsHeader />
      <SettingsForm />
    </Wrapper>
  );
};

export default Settings;
