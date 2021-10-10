import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { menuList as menuListAction } from '../../modules/menu';
import { readPost } from '../../modules/post';
import Menu from '../../components/common/Menu';

function MenuContainer({ history }) {
  const dispatch = useDispatch();
  const { menuList, user } = useSelector((state) => ({ menuList: state.menu.menuList, user: state.user.user }));

  const goWrite = (owner) => {
    history.push(`/wiki/write/${owner}`);
  };

  const showPost = (id) => {
    dispatch(readPost(id));
  };

  useEffect(() => {
    dispatch(menuListAction());
  }, [dispatch]);

  return <Menu user={user} userList={menuList} goWrite={goWrite} showPost={showPost} />;
}

export default withRouter(MenuContainer);
