import styled from 'styled-components';
import iconSettings from './../assets/icons/settings.svg';
import iconBack from './../assets/icons/back.svg';
import iconMute from './../assets/icons/volume-mute.svg';
import iconVolume from './../assets/icons/volume.svg';
import iconClose from './../assets/icons/close.svg';
import { Link } from 'react-router-dom';

const IconBtn = styled.button`
  display: block;
  width: 34px;
  height: 34px;
  padding: 0;
  background-color: transparent;
  border: none;
  background-position: center;
  cursor: pointer;
`;

const SmallIconBtn = styled(IconBtn)`
  width: 28px;
  height: 28px;
`;

export const BtnBack = styled(IconBtn)`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${iconBack});
`;

export const BtnSettings = styled(IconBtn)`
  margin-left: auto;
  background-image: url(${iconSettings});
  transition: 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const BtnMute = styled(SmallIconBtn)`
  background-image: url(${iconMute});
`;
export const BtnVolume = styled(SmallIconBtn)`
  background-image: url(${iconVolume});
`;
export const BtnClose = styled(SmallIconBtn)`
  background-image: url(${iconClose});
`;

export const Wrapper = styled.div`
  padding: 0 1rem;
  height: 100%;
  width: 100%;

  @media (min-width: 520px) {
    padding: 0 2rem;
  }

  @media (min-width: 769px) {
    padding: 0 2.5rem;
  }
`;

export const NavBtn = styled(Link)`
  width: 268px;
  padding: 14px 0;
  font-size: 24px;
  line-height: 28px;
  background-color: transparent;
  color: #fff;
  border-radius: 56px;
  border: 1px solid #fff;
  cursor: pointer;
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

  @media (min-width: 769px) {
    width: 287px;
    padding: 16px 0;
  }
`;
