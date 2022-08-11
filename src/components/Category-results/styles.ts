import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.5px;
  margin: 0 auto 20px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  row-gap: 20px;
  width: 100%;

  @media (min-width: 680px) {
    row-gap: 25px;
  }

  @media (min-width: 1024px) {
    row-gap: 50px;
  }
`;
