import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuList as menuListAction } from '../../modules/menu';
import Menu from '../../components/common/Menu';

function MenuContainer() {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(menuListAction());
  }, [dispatch]);

  return <Menu userList={menuList} />;
}

export default MenuContainer;
