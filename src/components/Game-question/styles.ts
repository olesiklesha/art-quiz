import styled from 'styled-components';

interface ImageProps {
  num: string;
}

export const Image = styled.div<ImageProps>`
  //width: 95%;
  height: 294px;
  background-color: #5b5757;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/irinainina/image-data/master/img/${p.num}.jpg`});
  border-radius: 20px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

interface TitleProps {
  isPic: boolean;
}

export const Title = styled.h2<TitleProps>`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.5px;
  margin-bottom: ${(p) => (p.isPic ? '25px' : '50px')};
  text-align: center;
`;
