import styled from 'styled-components';
import bg from '../../assets/images/main-bg.jpg';

export const Container = styled.div`
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media (min-width: 880px) {
    background-position: center -100px;
  }
`;
