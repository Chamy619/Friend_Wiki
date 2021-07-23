import styled, { css } from 'styled-components';
import palette from '../../lib/style/palette';

const ButtonBlock = styled.button`
  border: none;
  border-radius: 4px;
  background: ${(props) =>
    props.type && props.type === 'warning'
      ? palette.red[5]
      : props.type === 'cancel'
      ? palette.gray[5]
      : palette.blue[5]};
  text-align: center;
  color: white;
  font-size: 1rem;

  &:hover {
    background: ${(props) =>
      props.type && props.type === 'warning'
        ? palette.red[3]
        : props.type === 'cancel'
        ? palette.gray[3]
        : palette.blue[3]};
  }

  ${(props) =>
    props.fullFill &&
    css`
      width: 100%;
      font-weight: bold;
    `}

  padding: 0.25rem 1rem;
`;

function Button({ type, fullFill, onClick, children }) {
  return (
    <ButtonBlock type={type} fullFill={fullFill} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}

export default Button;
