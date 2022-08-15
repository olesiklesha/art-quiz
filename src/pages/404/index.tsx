import React from 'react';
import { Title } from '../../components/Category-results/styles';
import { Container, HomeLink, Pic, Wrapper } from './styles';
import { AppRoutes } from '../../constants';

const ErrorPage = () => {
  return (
    <Wrapper>
      <Container>
        <Pic />
        <Title>Sorry, this page was not found.</Title>
        <HomeLink to={AppRoutes.MAIN}>Go home</HomeLink>
      </Container>
    </Wrapper>
  );
};

export default ErrorPage;
