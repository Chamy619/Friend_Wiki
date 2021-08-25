import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { menuList as menuListAction } from '../../modules/menu';
import Menu from '../../components/common/Menu';

function MenuContainer({ history }) {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);

  const goWrite = (owner) => {
    history.push(`/write/${owner}`);
  };

  useEffect(() => {
    dispatch(menuListAction());
  }, [dispatch]);

  return <Menu userList={menuList} goWrite={goWrite} />;
}

export default withRouter(MenuContainer);
