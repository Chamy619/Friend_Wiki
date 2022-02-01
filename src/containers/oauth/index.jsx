import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { oauth, login } from '../../modules/auth';
import { check } from '../../modules/user';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import Oauth from '../../components/oauth';

function OauthContainer({ location, history }) {
  const dispatch = useDispatch();
  const { auth, oauthError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    oauthError: auth.oauthError,
    user: user.user,
  }));
  const query = queryString.parse(location.search);

  useEffect(() => {
    if (!user) {
      dispatch(login({ code: query.code }));
      dispatch(check());
      return;
    }
  }, [dispatch, user, history]);

  useEffect(() => {
    if (user) {
      if (!user.kakaoId) {
        dispatch(oauth({ code: query.code }));
        dispatch(check());
      }

      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user, history, dispatch]);

  return <Oauth />;
}

export default withRouter(OauthContainer);
