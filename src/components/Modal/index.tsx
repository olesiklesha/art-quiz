import React, { FC } from 'react';
import { ModalContainer, ModalWrapper, Overlay, OverlayWrapper } from './styles';
import { ConfirmWindow, Portal } from '..';

interface ModalProps {
  isOpened: boolean;
  onCancel: () => void;
  onAction?: () => void;
  children?: JSX.Element | JSX.Element[];
}

const Modal: FC<ModalProps> = ({ isOpened, onCancel, children, onAction }) => {
  const handleConfirm = () => {
    if (!onAction) return;

    onAction();
  };

  return (
    <>
      {isOpened && (
        <Portal>
          <OverlayWrapper>
            <Overlay onClick={onCancel} />
            <ModalWrapper>
              <ModalContainer>
                {children || <ConfirmWindow onAction={handleConfirm} onCancel={onCancel} />}
              </ModalContainer>
            </ModalWrapper>
          </OverlayWrapper>
        </Portal>
      )}
    </>
  );
};

export default Modal;
