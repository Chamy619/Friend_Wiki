import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initialForm, changeField, login } from '../../modules/auth';
import { check } from '../../modules/user';
import AuthForm from '../../components/auth/AuthForm';

function LoginForm({ history }) {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { email, password, loading, auth, authError, user } = useSelector((state) => ({
    email: state.auth.login.email,
    password: state.auth.login.password,
    auth: state.auth.auth,
    authError: state.auth.loginError,
    loading: state.loading['auth/LOGIN'],
    user: state.user.user,
  }));

  const onChange = (event) => {
    dispatch(changeField({ form: 'login', name: event.target.name, value: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    dispatch(initialForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('로그인 실패했습니다.');
    }

    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      dispatch(initialForm('login'));
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user, dispatch]);

  return (
    <AuthForm
      type="login"
      email={email}
      password={password}
      onChange={onChange}
      loading={loading}
      onSubmit={onSubmit}
      error={error}
    />
  );
}

export default withRouter(LoginForm);
