import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import Header from '../../components/common/Header';

function HeaderContainer({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const menu = [
    { text: '위키', path: 'wiki' },
    { text: '나댐왕 계보', path: 'genealogy' },
    { text: '후원', path: 'support' },
  ];

  const goLogin = () => {
    history.push('/login');
  };

  const onLogout = () => {
    dispatch(logout());
  };

  const goMenu = (path) => {
    history.push(`/${path}`);
  };

  return <Header user={user} goLogin={goLogin} onLogout={onLogout} menu={menu} goMenu={goMenu} />;
}

export default withRouter(HeaderContainer);
