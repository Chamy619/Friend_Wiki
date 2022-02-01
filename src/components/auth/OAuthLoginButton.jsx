import styled from 'styled-components';
import { ImBubble } from 'react-icons/im';

const OAuthLoginButtonBox = styled.div`
  width: 100%;
  background: #fee500;
  color: #191919;
  border-radius: 12px;
  margin-top: 1rem;
  height: 2.5rem;
  display: flex;
  cursor: pointer;
`;

const SymbolBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0.75rem;
  font-size: 1.5rem;
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

function OAuthLoginButton({ type, text }) {
  const authorization = () => {
    if (type === 'authentication') {
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_AUTHENTICATION_REDIRECT_URI}&response_type=code`;
      return;
    }

    if (type === 'login') {
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
      return;
    }
  };

  return (
    <OAuthLoginButtonBox onClick={authorization}>
      <SymbolBox>
        <ImBubble />
      </SymbolBox>
      <LabelBox>{text}</LabelBox>
    </OAuthLoginButtonBox>
  );
}

export default OAuthLoginButton;
