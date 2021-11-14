import styled from 'styled-components';
import OAuthLoginButton from '../auth/OAuthLoginButton';

const ModalContainer = styled.div`
  position: absolute;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

function AuthenticationModal({ user }) {
  if (!user || user.kakaoId) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalBox>
        <h2>인증을 완료해주세요</h2>
        <OAuthLoginButton text="카카오로 인증하기" type="authentication" />
      </ModalBox>
    </ModalContainer>
  );
}

export default AuthenticationModal;
