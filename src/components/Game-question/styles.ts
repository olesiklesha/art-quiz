import styled from 'styled-components';

interface ImageProps {
  num: string;
}

export const Image = styled.div<ImageProps>`
  width: 95%;
  height: 294px;
  background-color: #5b5757;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/irinainina/image-data/master/img/${p.num}.jpg`});
  border-radius: 20px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
`;
