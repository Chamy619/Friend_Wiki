import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const makeMenu = (userList, goWrite, showPost, showPosts, selected) => {
  const menu = [];
  for (let username in userList) {
    menu.push(
      <MenuItem
        username={username}
        posts={userList[username]}
        key={username}
        goWrite={goWrite}
        showPost={showPost}
        showPosts={showPosts}
        selected={selected}
      />,
    );
  }
  return menu;
};

function Menu({ user, userList, goWrite, showPost, showPosts, selected }) {
  return <MenuBlock>{makeMenu(userList, goWrite, showPost, showPosts, selected)}</MenuBlock>;
}

export default Menu;
