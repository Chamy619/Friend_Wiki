import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

function WriteActionButtons({ onCancel, onPublish }) {
  return (
    <WriteActionButtonsBlock>
      <Button onClick={onPublish}>등록</Button>
      <Button onclick={onCancel} type="cancel">
        취소
      </Button>
    </WriteActionButtonsBlock>
  );
}

export default WriteActionButtons;
