import styled from 'styled-components';

const MenuItemBlock = styled.div`
  display: block;
  cursor: pointer;
  margin-top: 0.25rem;

  &:hover {
  }

  .user {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
  .user:hover {
    font-weight: bold;
  }
  .selected {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .user {
      font-size: 12px;
      padding: 0.25rem;
    }
  }
`;

function MenuItem({ username, posts, showPosts, selected, clearPost }) {
  const handleClick = () => {
    const postArray = [...posts];
    postArray.name = username;
    showPosts(postArray);
    clearPost();
  };
  return (
    <MenuItemBlock>
      <div className={'user' + (username === selected?.name ? ' selected' : '')} onClick={handleClick}>
        {username}
      </div>
    </MenuItemBlock>
  );
}

export default MenuItem;
