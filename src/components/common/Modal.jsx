import styled from 'styled-components';
import Button from './Button';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Modal({ children, onConfirm, onCancel }) {
  return (
    <Fullscreen>
      <ModalBlock>
        <h2>회원가입 체크</h2>
        {children}
        <ButtonWrapper>
          <Button type="cancel" onClick={onCancel}>
            취소
          </Button>
          <Button type="confirm" onClick={onConfirm}>
            제출
          </Button>
        </ButtonWrapper>
      </ModalBlock>
    </Fullscreen>
  );
}

export default Modal;
