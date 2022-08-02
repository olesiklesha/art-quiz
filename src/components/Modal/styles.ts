import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Overlay = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  pointer-events: all;
  cursor: pointer;
  background-color: transparent;
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  color: #000;
  margin: 0 0.5rem;
  width: 100%;
  position: relative;
  z-index: 6;

  @media (min-width: 600px) {
    width: 580px;
  }
`;

export const ModalContainer = styled.div`
  padding: 20px;
`;
