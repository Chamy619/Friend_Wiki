import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';

function PostViewerContainer() {
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch]);

  return <PostViewer post={post} error={error} loading={loading} />;
}

export default PostViewerContainer;
