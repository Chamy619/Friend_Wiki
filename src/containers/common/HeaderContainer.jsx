import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';

function HeaderContainer({ history }) {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const goLogin = () => {
    history.push('/login');
  };

  return <Header user={user} goLogin={goLogin} />;
}

export default withRouter(HeaderContainer);
