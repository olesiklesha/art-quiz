import React, { FC } from 'react';
import { CloseIconBtn, Container, Title } from './styles';
import { ActionBtn, BtnContainer } from '../Modal/styles';

interface ConfirmProps {
  onCancel: () => void;
  onAction: () => void;
}

const ConfirmWindow: FC<ConfirmProps> = ({ onCancel, onAction }) => {
  return (
    <Container>
      <CloseIconBtn onClick={onCancel} />
      <Title>Do you really want to quit the game?</Title>
      <BtnContainer>
        <ActionBtn accent={false} onClick={onCancel}>
          Cansel
        </ActionBtn>
        <ActionBtn accent={true} onClick={onAction}>
          Yes
        </ActionBtn>
      </BtnContainer>
    </Container>
  );
};

export default ConfirmWindow;
