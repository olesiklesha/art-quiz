import styled from 'styled-components';
import { R_QUANTITY } from '../../constants';
import superIcon from '../../assets/icons/super.svg';
import goodIcon from '../../assets/icons/good.svg';
import gameOverIcon from '../../assets/icons/game-over.svg';
import { Title } from '../Confirm-window/styles';

interface Props {
  result: number;
}

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultIcon = styled.div<Props>`
  width: ${(p) => {
    if (p.result === R_QUANTITY) return '277px';
    return '170px';
  }};
  height: ${(p) => {
    if (p.result === R_QUANTITY) return '108px';
    return '160px';
  }};
  margin: 40px auto 0 auto;
  background-image: url(${(p) => {
    const { result } = p;
    if (result === R_QUANTITY) return superIcon;
    if (result > 0) return goodIcon;
    return gameOverIcon;
  }});
  background-size: cover;
  background-position: center;
`;

export const SubTitle = styled.h3<Props>`
  width: 200px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.5px;
  margin: ${(p) => {
    const { result } = p;
    if (result === R_QUANTITY) return '0 auto 35px';
    return '20px auto';
  }};
  //20px auto 35px
`;

export const ResultTitle = styled.h2<Props>`
  order: ${(p) => (p.result > 0 && p.result < R_QUANTITY ? '1' : '-1')};
  text-align: center;
  width: ${(p) => {
    const { result } = p;
    if (result === R_QUANTITY) return '220px';
    return '100%';
  }};
  font-size: ${(p) => {
    const { result } = p;
    if (result === R_QUANTITY) return '52px';
    if (result > 0) return '48px';
    return '36px';
  }};
  margin: ${(p) => {
    const { result } = p;
    if (result === R_QUANTITY) return '20px auto';
    if (result > 0) return '30px auto 35px';
    return '30px auto 25px';
  }}; ;
`;
// line-height: ${(p) => {
//     const { result } = p;
// if (result === R_QUANTITY) return '52px';
// if (result > 0) return '48px';
// return '36px';
// }};
