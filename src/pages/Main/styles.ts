import styled from 'styled-components';
import bg from '../../assets/images/main-bg.jpg';
import logo from '../../assets/icons/logo-main.svg';

export const MainContainer = styled.main`
  display: flex;
  min-height: calc(100% - 104px);
  justify-content: flex-end;
  flex-direction: column;

  @media (min-width: 520px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media (min-width: 880px) {
    background-position: center -100px;
  }
`;

export const Header = styled.header`
  padding: 22px 8px 0 0;

  @media (min-width: 520px) {
    padding: 36px 4px 0 0;
  }

  @media (min-width: 769px) {
    padding: 70px 30px 0 0;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;

  @media (min-width: 520px) {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    column-gap: 40px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;

  @media (min-width: 520px) {
    margin: 0;
  }
`;

export const Logo = styled.div`
  width: 166px;
  height: 62px;
  background-image: url(${logo});
  background-size: cover;
  margin-bottom: 32px;

  @media (min-width: 520px) {
    width: 320px;
    height: 120px;
    margin-bottom: 120px;
  }

  @media (min-width: 769px) {
    width: 440px;
    height: 164px;
    margin-bottom: 164px;
  }
`;
