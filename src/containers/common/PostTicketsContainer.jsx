import { useSelector } from 'react-redux';
import PostTickets from '../../components/common/PostTickets';

function PostTicketsContainer() {
  const { selected } = useSelector((state) => ({
    selected: state.menu.selected,
  }));

  return <PostTickets posts={selected} />;
}

export default PostTicketsContainer;
