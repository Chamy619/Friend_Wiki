import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PostViewerContainer from '../post/PostViewerContainer';
import PostTicketsContainer from './PostTicketsContainer';

function WikiMainContainer() {
  const { post, user } = useSelector(({ post, user }) => ({ post: post.post, user: user.user }));

  if (!user) {
    return <Redirect to={{ pathname: '/login', state: { from: '/wiki' } }} />;
  }

  if (post) {
    return <PostViewerContainer />;
  }

  return <PostTicketsContainer />;
}

export default WikiMainContainer;
