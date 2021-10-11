import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { select } from '../../modules/menu';
import PostTickets from '../../components/common/PostTickets';

function PostTicketsContainer({ history }) {
  const dispatch = useDispatch();
  const { menuList, selected } = useSelector((state) => ({
    menuList: state.menu.menuList,
    selected: state.menu.selected,
  }));

  const goWrite = () => {
    history.push(`/wiki/write/${selected?.name}`);
  };

  useEffect(() => {
    if (selected?.length) {
      if (menuList[selected.name].length !== selected.length) {
        const reloadList = [...menuList[selected.name]];
        reloadList.name = selected.name;
        dispatch(select(reloadList));
      }
    }
  }, [dispatch, menuList, selected]);

  return <PostTickets posts={selected} goWrite={goWrite} />;
}

export default withRouter(PostTicketsContainer);
