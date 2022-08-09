import styled from 'styled-components';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -0.9px;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const LabelContainer = styled.label`
  display: block;
  margin-bottom: 40px;
`;

interface RangeProps {
  rangeValue: number;
}
export const CustomRange = styled.input<RangeProps>`
  position: relative;
  background: ${(p) =>
    `linear-gradient(to right, #ffbca2 0%, #ffbca2 ${p.rangeValue}%, #fff ${p.rangeValue}%, #fff 100%)`};
  border: none;
  height: 3px;
  width: 100%;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  border-radius: 4px;
  margin: 14px 0;

  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: pointer;
    background: #fff;
  }

  &::-moz-range-thumb {
    border: none;
    width: 16px;
    height: 16px;
  }
`;

export const VolumeBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
