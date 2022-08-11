import styled from 'styled-components';
import { Container } from '../../components/Category-results/styles';

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const PictureContainer = styled(Container)`
  margin: 0 auto;
  justify-content: space-between;
  align-content: flex-start;
  row-gap: 20px;
`;

interface PicProps {
  src: string;
  isSolved: boolean;
}

export const AnsInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-color: #ffbca2;
  transform: translateY(100%);
  transition: 0.3s ease-in-out;
`;

export const AnsName = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const AnsData = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 14px;
`;

export const Picture = styled.div<PicProps>`
  position: relative;
  height: 164px;
  width: calc(150 / 328 * 100%);
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  background-color: #5b5757;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/irinainina/image-data/master/img/${p.src}.jpg`});
  filter: grayscale(${(p) => (p.isSolved ? 0 : 1)});
  overflow: hidden;

  @media (min-width: 680px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 170px;
    width: 160px;
  }

  @media (min-width: 1440px) {
    height: 22vh;
    width: calc(200 / 1100 * 100%);
  }

  &:hover ${AnsInfo} {
    transform: translateY(0);
  }
`;
