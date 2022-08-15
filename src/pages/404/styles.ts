import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  flex-grow: 1;
`;

export const Pic = styled.div`
  width: 80%;
  max-width: 700px;
  height: 50vh;
  background-image: url('https://raw.githubusercontent.com/irinainina/image-data/master/img/81.jpg');
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  border-radius: 20px;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.5px;
  margin: 0 auto 20px;
  text-align: center;
  font-style: italic;
  width: 100%;

  &:hover {
    transition: 0.3s ease-in-out;
    text-decoration: none;
  }
`;
