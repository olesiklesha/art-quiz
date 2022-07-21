import React from 'react';
import { Container, BtnGroup, MainContainer, Header, Section, Logo } from './styles';
import { SettingsBtn } from '../../components';
import { AppRoutes } from '../../constants';
import { Wrapper, NavBtn } from '../../styles';

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <SettingsBtn />
        </Header>
        <MainContainer>
          <Section>
            <Logo />
            <BtnGroup>
              <NavBtn to={AppRoutes.ART}>Artist quiz</NavBtn>
              <NavBtn to={AppRoutes.PIC}>Picture quiz</NavBtn>
            </BtnGroup>
          </Section>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default Main;
