import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const makeMenu = (userList, showPosts, selected, clearPost) => {
  const menu = [];
  for (let username in userList) {
    menu.push(
      <MenuItem
        username={username}
        posts={userList[username]}
        key={username}
        showPosts={showPosts}
        selected={selected}
        clearPost={clearPost}
      />,
    );
  }
  return menu;
};

function Menu({ userList, showPosts, selected, clearPost }) {
  return <MenuBlock>{makeMenu(userList, showPosts, selected, clearPost)}</MenuBlock>;
}

export default Menu;
