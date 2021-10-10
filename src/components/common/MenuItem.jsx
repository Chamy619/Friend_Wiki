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

function MenuItem({ username, posts, goWrite, showPost, showPosts, selected }) {
  const handleClick = () => {
    showPosts({ ...posts, name: username });
  };
  return (
    <MenuItemBlock>
      <div className={'user' + (username === selected?.name ? ' selected' : '')} onClick={handleClick}>
        {username}
      </div>
      {/* {postVisible &&
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
        ))} */}
    </MenuItemBlock>
  );
}

export default MenuItem;
