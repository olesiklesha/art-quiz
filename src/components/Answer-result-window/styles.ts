import styled from 'styled-components';
import trueIcon from '../../assets/icons/true.svg';
import falseIcon from '../../assets/icons/false.svg';
import { ActionBtn } from '../Modal/styles';

interface PicProps {
  isCorrect: boolean;
  img: string;
}

export const Picture = styled.div<PicProps>`
  position: relative;
  background-color: #5b5757;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/irinainina/image-data/master/img/${p.img}.jpg`});
  border-radius: 20px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  margin: 10px auto 30px auto;
  height: 290px;

  &::before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 30px;
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(${(p) => (p.isCorrect ? trueIcon : falseIcon)});
    -webkit-background-size: cover;
    background-size: cover;
  }

  @media (min-width: 690px) {
    width: calc(100% - 20px);
    height: 416px;

    &::before {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  text-align: center;
  margin: 0 0 10px 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  margin: 0 0 35px 0;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Btn = styled(ActionBtn)`
  display: block;
  margin: 0 auto;
  width: calc(400 / 522 * 100%);
`;
