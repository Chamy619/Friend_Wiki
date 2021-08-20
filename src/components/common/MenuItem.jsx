import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import palette from '../../lib/style/palette';

const MenuItemBlock = styled.div`
  display: block;
  cursor: pointer;
  background: ${palette.blue[3]};

  &:hover {
  }

  .user {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 0.25rem;
  }
  .user:hover {
    background: ${palette.blue[1]};
  }

  .post {
    padding-left: 0.5rem;
    background: ${palette.blue[2]};
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .post:hover {
    background: ${palette.blue[5]};
  }
`;

const WriteButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${palette.blue[0]};
  }
`;

function MenuItem() {
  const [postVisible, setPostVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);

  const onClick = () => {
    setPostVisible(!postVisible);
  };

  const onMouseOver = () => {
    setAddVisible(true);
  };

  const onMouseLeave = () => {
    setAddVisible(false);
  };

  return (
    <MenuItemBlock>
      <div className="user" onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        양채훈
        {addVisible && (
          <WriteButtonBlock>
            <AiOutlinePlus />
          </WriteButtonBlock>
        )}
      </div>
      {postVisible && (
        <>
          <div className="post">글1</div>
          <div className="post">글2</div>
          <div className="post">글3</div>
          <div className="post">글4</div>
        </>
      )}
    </MenuItemBlock>
  );
}

export default MenuItem;
