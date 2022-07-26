import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled(Link)`
  display: block;
  position: relative;
  margin: 0;
  width: calc(150 / 328 * 100%);
  // height: 198px;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  text-decoration: none;
`;

interface CategoryImageProps {
  src: string;
}

export const CategoryImage = styled.div<CategoryImageProps>`
  height: 164px;
  width: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  background-color: #c06e6e;
  background-image: url(${(p) => `../${p.src}.jpg`});
`;
