import styled from 'styled-components';
import { Link } from 'react-router-dom';
import reloadIcon from '../../assets/icons/radix-icons_reload.svg';

export const CategoryContainer = styled(Link)`
  display: block;
  position: relative;
  margin: 0;
  width: calc(150 / 328 * 100%);
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  text-decoration: none;

  @media (min-width: 1024px) {
    width: 160px;
  }

  @media (min-width: 1440px) {
    width: calc(200 / 1100 * 100%);
  }
`;

interface CategoryImageProps {
  src: string;
  isNew: boolean;
}

export const CategoryImage = styled.div<CategoryImageProps>`
  position: relative;
  height: 164px;
  width: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  background-color: #5b5757;
  background-image: url(${(p) => `../../../../${p.src}.jpg`});
  filter: grayscale(${(p) => (p.isNew ? 1 : 0)});

  @media (min-width: 680px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 170px;
  }

  @media (min-width: 1440px) {
    height: 22vh;
  }
`;

export const CategoryImageLabel = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #ffbca2;
  border-radius: 25px 25px 0 0;
  color: #000;
  cursor: pointer;
`;

export const ReloadIcon = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${reloadIcon});
  background-size: cover;
  margin-right: 5px;
`;
