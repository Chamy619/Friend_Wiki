import { useSelector } from 'react-redux';
import AuthenticationModal from '../../components/common/AuthenticationModal';

function AuthenticationModalContainer() {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  return <AuthenticationModal user={user} />;
}

export default AuthenticationModalContainer;
