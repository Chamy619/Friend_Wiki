import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[8]};
  padding: 0 0.5rem;
  .logo {
    h3 {
      font-size: 1.5rem;
    }
  }
  .user_info {
    display: flex;
    flex-direction: row;
    line-height: 2rem;
  }
`;

const Spacer = styled.div`
  height: 3rem;
`;

const ButtonBlock = styled.div`
  margin-left: 1rem;
`;

function Header({ user }) {
  return (
    <>
      <HeaderBlock>
        <div className="logo">
          <h3>
            <Link to="/">느그위키</Link>
          </h3>
        </div>
        {user && (
          <div className="user_info">
            {user.username}님 환영합니다.
            <ButtonBlock>
              <Button type="warning">로그아웃</Button>
            </ButtonBlock>
          </div>
        )}
        {!user && <Button type="confirm">로그인</Button>}
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
