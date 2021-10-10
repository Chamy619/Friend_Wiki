import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { menuList as menuListAction, select } from '../../modules/menu';
import { readPost } from '../../modules/post';
import Menu from '../../components/common/Menu';

function MenuContainer({ history }) {
  const dispatch = useDispatch();
  const { menuList, selected, user } = useSelector((state) => ({
    menuList: state.menu.menuList,
    selected: state.menu.selected,
    user: state.user.user,
  }));

  const goWrite = (owner) => {
    history.push(`/wiki/write/${owner}`);
  };

  const showPost = (id) => {
    dispatch(readPost(id));
  };

  const showPosts = (owner) => {
    dispatch(select(owner));
  };

  useEffect(() => {
    dispatch(menuListAction());
  }, [dispatch]);

  return (
    <Menu
      user={user}
      userList={menuList}
      goWrite={goWrite}
      showPost={showPost}
      showPosts={showPosts}
      selected={selected}
    />
  );
}

export default withRouter(MenuContainer);
