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
  border-radius: 20px;

  @media (min-width: 600px) {
    width: 580px;
  }
`;

export const ModalContainer = styled.div`
  padding: 20px;
`;

interface ActionBtnProps {
  accent: boolean;
}

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ActionBtn = styled.button<ActionBtnProps>`
  width: calc(158 / 328 * 100%);
  //max-width: 251px;
  color: #000;
  padding: 14px 0;
  background-color: ${(p) => (p.accent ? '#FFBCA2' : 'transparent')};
  border-radius: 56px;
  border: ${(p) => (p.accent ? '1px solid transparent' : '1px solid #000')};
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(p) => (p.accent ? '#000' : '#fff')};
    background-color: ${(p) => (p.accent ? '#fff' : '#000')};
    border: ${(p) => (p.accent ? '1px solid #FFBCA2' : '1px solid #000')};
  }
`;
