import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import Button from './Button';
import { FaBars } from 'react-icons/fa';

const HeaderBlock = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background: ${palette.gray[7]};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[8]};
  padding: 0 0.5rem;
  .logo {
    h3 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
  }

  .menu {
    display: flex;
    padding-left: 0;
    li {
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
    }
    li:hover {
      background: ${palette.blue[4]};
    }
  }

  .user_info {
    display: flex;
    flex-direction: row;
    line-height: 2rem;
  }

  .toggle {
    position: absolute;
    right: 8px;
    top: 0.5rem;
    font-size: 1.5rem;
    display: none;
    cursor: pointer;
  }

  .toggle_menu {
    display: none;
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    li {
      text-align: center;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
    }
    li:hover {
      background: ${palette.blue[4]};
    }
  }

  .toggle_user_info {
    display: none;
    width: 100%;
    justify-content: center;
    padding-bottom: 0.5rem;
    div {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;

    .menu,
    .user_info,
    .login {
      display: none;
    }

    .toggle {
      display: block;
    }

    .toggle_menu {
      display: flex;
    }

    .toggle_user_info {
      display: flex;
    }
  }
`;

const Spacer = styled.div`
  height: 3rem;
`;

const ButtonBlock = styled.div`
  margin-left: 1rem;
`;

function Header({ user, goLogin, onLogout }) {
  const [toggled, setToggled] = useState(false);

  const onToggle = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <HeaderBlock>
        <div className="logo">
          <h3>
            <Link to="/">느그위키</Link>
          </h3>
        </div>
        <ul className="menu">
          <li>위키</li>
          <li>미키</li>
        </ul>
        {user && (
          <div className="user_info">
            {user.username}님 환영합니다.
            <ButtonBlock>
              <Button type="warning" onClick={onLogout}>
                로그아웃
              </Button>
            </ButtonBlock>
          </div>
        )}
        {!user && (
          <div className="login">
            <Button type="confirm" onClick={goLogin}>
              로그인
            </Button>
          </div>
        )}
        <div className="toggle" onClick={onToggle}>
          <FaBars />
        </div>
        <ul className="toggle_menu">
          <li>위키</li>
          <li>미키</li>
        </ul>
        {!user && (
          <div className="toggle_user_info">
            <Button type="confirm" onClick={goLogin}>
              로그인
            </Button>
          </div>
        )}
        {user && (
          <div className="toggle_user_info">
            <Button type="warning" onClick={onLogout}>
              로그아웃
            </Button>
          </div>
        )}
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
