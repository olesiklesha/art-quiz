import styled from 'styled-components';
import { BtnClose } from '../../styles';

export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

export const CloseIconBtn = styled(BtnClose)`
  position: absolute;
  top: -60px;
  right: -10px;
  background-color: transparent;
  filter: invert(0%) sepia(11%) saturate(1730%) hue-rotate(44deg) brightness(86%) contrast(87%);
`;

export const Title = styled.h3`
  width: 200px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.5px;
  margin: 50px auto 55px auto;
`;
