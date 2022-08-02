import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(666 / 768 * 100%);
  }

  @media (min-width: 1024px) {
    width: 826px;
  }
`;
