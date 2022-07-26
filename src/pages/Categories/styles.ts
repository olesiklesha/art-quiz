import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 160px);
  //margin-bottom: 75px;

  @media (min-width: 680px) {
    row-gap: 25px;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 884px;
    row-gap: 50px;
  }

  @media (min-width: 1440px) {
    width: calc(1100 / 1300 * 100%);
  }
`;
