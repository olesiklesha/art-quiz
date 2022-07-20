import styled from 'styled-components';
import iconSettings from './../assets/icons/settings.svg';
import iconBack from './../assets/icons/back.svg';
import iconMute from './../assets/icons/volume-mute.svg';
import iconVolume from './../assets/icons/volume.svg';
import iconClose from './../assets/icons/close.svg';

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
  background-image: url(${iconBack});
`;

export const BtnSettings = styled(IconBtn)`
  background-image: url(${iconSettings});
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
