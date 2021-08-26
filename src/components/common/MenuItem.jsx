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

function MenuItem({ username, posts, goWrite, showPost }) {
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
        {username}
        {addVisible && (
          <WriteButtonBlock onClick={() => goWrite(username)}>
            <AiOutlinePlus />
          </WriteButtonBlock>
        )}
      </div>
      {postVisible &&
        posts.map((post) => (
          <div
            className="post"
            key={post.id}
            onClick={() => {
              showPost(post.id);
            }}
          >
            {post.title}
          </div>
        ))}
    </MenuItemBlock>
  );
}

export default MenuItem;
