import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, initialize } from '../../modules/write';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useEffect } from 'react';

function WriteActionButtonsContainer({ history }) {
  const dispatch = useDispatch();
  const { title, body, owner, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    owner: write.owner,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = () => {
    dispatch(writePost({ title, body, owner }));
  };

  const onCancel = () => {
    history.push('/');
  };

  useEffect(() => {
    if (post) {
      history.push('/');
      dispatch(initialize(''));
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError, dispatch]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
}

export default withRouter(WriteActionButtonsContainer);
