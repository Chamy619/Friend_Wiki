import { useSelector } from 'react-redux';
import PostViewerContainer from '../post/PostViewerContainer';
import PostTicketsContainer from './PostTicketsContainer';

function WikiMainContainer() {
  const { post } = useSelector(({ post }) => ({ post: post.post }));

  if (post) {
    return <PostViewerContainer />;
  }
  return <PostTicketsContainer />;
}

export default WikiMainContainer;
