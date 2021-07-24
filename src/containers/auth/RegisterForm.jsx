import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initialForm, changeField, register } from '../../modules/auth';
import { check } from '../../modules/user';
import AuthForm from '../../components/auth/AuthForm';

function RegisterForm({ history }) {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { email, username, password, passwordConfirm, auth, authError, user } = useSelector((state) => ({
    email: state.auth.register.email,
    username: state.auth.register.username,
    password: state.auth.register.password,
    passwordConfirm: state.auth.register.passwordConfirm,
    auth: state.auth.auth,
    authError: state.auth.authError,
    user: state.user.user,
  }));

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    dispatch(register({ email, username, password }));
  };

  const onChange = (event) => {
    dispatch(changeField({ form: 'register', name: event.target.name, value: event.target.value }));
  };

  useEffect(() => {
    dispatch(initialForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('회원가입 실패했습니다.');
    }

    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, dispatch, user]);

  return (
    <AuthForm
      type="register"
      email={email}
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}

export default withRouter(RegisterForm);
