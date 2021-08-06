import Modal from '../components/common/Modal';
import Quiz from '../components/common/Quiz';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

function RegisterPage() {
  return (
    <>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
      <Modal>
        <Quiz />
      </Modal>
    </>
  );
}

export default RegisterPage;
