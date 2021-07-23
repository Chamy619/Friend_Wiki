import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div``;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  font-size: 1rem;
  &:focus {
    border-bottom: 1px solid ${palette.blue[5]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.gray[8]};
    text-decoration: underline;
    font-size: 0.9rem;
  }
`;

const names = {
  login: '로그인',
  register: '회원가입',
};

function AuthForm({ type, email, password, passwordConfirm, onChange, loading, onSubmit }) {
  return (
    <AuthFormBlock>
      <h3>{names[type]}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput type="email" name="email" placeholder="계정" value={email || ''} onChange={onChange} />
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password || ''}
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={passwordConfirm || ''}
            onChange={onChange}
          />
        )}
        <ButtonWrapper>
          <Button type="submit" fullFill>
            {names[type]}
          </Button>
        </ButtonWrapper>
      </form>
      <Footer>
        <Link to={`/${type === 'register' ? 'login' : 'register'}`}>
          {type === 'register' ? names['login'] : names['register']}
        </Link>
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
