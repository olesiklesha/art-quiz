import styled from 'styled-components';

export const AnswerOptionsBtn = styled.button`
  width: 162px;
  padding: 14px 0;
  background-color: transparent;
  color: #fff;
  border-radius: 56px;
  border: 1px solid #fff;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:active {
    background-color: #ffbca2;
    color: #000;
    border-color: #ffbca2;
  }

  @media (min-width: 520px) {
    width: calc(290 / 620 * 100%);
  }

  @media (min-width: 880px) {
    width: calc(400 / 825 * 100%);
    font-size: 22px;
  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 15px;
  margin-top: 25px;
`;

interface ImageAnswerOptionBtnProps {
  num: number;
}
export const ImageAnswerOptionBtn = styled.button<ImageAnswerOptionBtnProps>`
  display: block;
  width: calc(160 / 340 * 100%);
  height: 165px;
  background-color: #5b5757;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/irinainina/image-data/master/img/${p.num}.jpg`});
  border-radius: 20px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: none;
`;
