import React, { FC } from 'react';
import { ModalContainer, ModalWrapper, Overlay, OverlayWrapper } from './styles';
import { Portal } from '..';

interface ModalProps {
  isOpened: boolean;
  onCancel: () => void;
  children?: JSX.Element | JSX.Element[];
  onAction: () => void;
}

const Modal: FC<ModalProps> = ({ isOpened, onCancel, children, onAction }) => {
  return (
    <>
      {isOpened && (
        <Portal>
          <OverlayWrapper>
            <Overlay onClick={onCancel} />
            <ModalWrapper>
              <ModalContainer>{children || <div>confirm</div>}</ModalContainer>
            </ModalWrapper>
          </OverlayWrapper>
        </Portal>
      )}
    </>
  );
};

export default Modal;
