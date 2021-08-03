import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import Header from '../../components/common/Header';

function HeaderContainer({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const goLogin = () => {
    history.push('/login');
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return <Header user={user} goLogin={goLogin} onLogout={onLogout} />;
}

export default withRouter(HeaderContainer);
