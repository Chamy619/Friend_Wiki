import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unloadPost } from '../../modules/post';
import { setOriginalPost } from '../../modules/write';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { removePost } from '../../lib/api/posts';

function PostViewerContainer({ history }) {
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    user: user.user,
  }));

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push(`/write/${post.owner}`);
  };

  const onRemove = async () => {
    try {
      await removePost(post._id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const ownPost = (user && user.username) === (post && post.owner);

  useEffect(() => {
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch]);

  return (
    <PostViewer
      post={post}
      error={error}
      loading={loading}
      actionButtons={!ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
    />
  );
}

export default withRouter(PostViewerContainer);
