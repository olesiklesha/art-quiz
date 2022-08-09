import styled from 'styled-components';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -0.9px;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const LabelContainer = styled.div`
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
  align-items: center;
`;

export const DurationFieldContainer = styled(VolumeBtnContainer)`
  justify-content: center;
`;

export const BtnContainer = styled(DurationFieldContainer)`
  margin-top: auto;
`;

export const LabelToggle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const SwitchToggle = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 190px;
  background-color: #9b8080;
  padding: 4px;

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    background-color: #fff;
    transform: translate(0, -50%);
  }
`;

export const InputToggle = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchToggle} {
    background-color: #ffbca2;

    &:before {
      transform: translate(24px, -50%);
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const CustomNumberInput = styled.input`
  color: #fff;
  background-color: transparent;
  font-size: 28px;
  line-height: 28px;
  width: 60px;
  text-align: center;
  border: none;
  margin-left: 25px;
  margin-right: 25px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  outline: none;
`;

export const SetNumberBtn = styled.button`
  display: block;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: none;
  position: relative;
  background-color: #ffbca2;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 13px;
    height: 3px;
    border-radius: 3px;
    background-color: #000;
  }
`;

export const SetMoreBtn = styled(SetNumberBtn)`
  background-color: #fff;
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    content: '';
    display: block;
    width: 14px;
    height: 3px;
    border-radius: 3px;
    background-color: #000;
  }
`;
