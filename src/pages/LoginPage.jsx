import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import OAuthLoginButton from '../components/auth/OAuthLoginButton';

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
      <OAuthLoginButton text="카카오 로그인" type="login" />
    </AuthTemplate>
  );
}

export default LoginPage;
