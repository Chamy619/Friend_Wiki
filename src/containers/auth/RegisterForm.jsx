import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initialForm, changeField, register } from '../../modules/auth';
import { check } from '../../modules/user';
import AuthForm from '../../components/auth/AuthForm';
import QuizModalContainer from '../common/QuizModalContainer';

function RegisterForm({ history }) {
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { email, username, password, passwordConfirm, auth, authError, user } = useSelector((state) => ({
    email: state.auth.register.email,
    username: state.auth.register.username,
    password: state.auth.register.password,
    passwordConfirm: state.auth.register.passwordConfirm,
    auth: state.auth.auth,
    authError: state.auth.registerError,
    user: state.user.user,
  }));

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!email || !username || !password || !passwordConfirm) {
      setError('입력을 확인해주세요.');
      return;
    }

    setModal(true);
  };

  const onSuccess = () => {
    dispatch(register({ email, username, password }));
  };

  const onChange = (event) => {
    dispatch(changeField({ form: 'register', name: event.target.name, value: event.target.value }));
  };

  const closeModal = () => {
    setModal(false);
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
      dispatch(initialForm('register'));
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, dispatch, user]);

  return (
    <>
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
      <QuizModalContainer visible={modal} onSuccess={onSuccess} closeModal={closeModal} />
    </>
  );
}

export default withRouter(RegisterForm);
