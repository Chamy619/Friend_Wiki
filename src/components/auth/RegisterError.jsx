import styled, { keyframes } from 'styled-components';
import palette from '../../lib/style/palette';

const RegisterErrorBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${palette.gray[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        tranform: translateY(0px);
    }
`;

const ErrorBox = styled.div`
  background: white;
  width: 320px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  h2 {
    margin-top: 0%;
    color: ${palette.red[6]};
  }
  p {
    font-weight: bold;
    margin-bottom: 0;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

function RegisterError() {
  return (
    <RegisterErrorBlock>
      <ErrorBox>
        <h2>에러!!</h2>
        <p>팅구리냐?</p>
      </ErrorBox>
    </RegisterErrorBlock>
  );
}

export default RegisterError;
