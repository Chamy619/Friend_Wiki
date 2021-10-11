import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuList as menuListAction, select } from '../../modules/menu';
import { unloadPost } from '../../modules/post';
import Menu from '../../components/common/Menu';

function MenuContainer() {
  const dispatch = useDispatch();
  const { menuList, selected } = useSelector((state) => ({
    menuList: state.menu.menuList,
    selected: state.menu.selected,
  }));

  const showPosts = (owner) => {
    dispatch(select(owner));
  };

  useEffect(() => {
    dispatch(menuListAction());
  }, [dispatch]);

  const clearPost = () => {
    dispatch(unloadPost());
  };

  return <Menu userList={menuList} showPosts={showPosts} selected={selected} clearPost={clearPost} />;
}

export default MenuContainer;
