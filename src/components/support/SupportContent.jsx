import styled from 'styled-components';
import Title from './Title';
import QRCode from './QRCode';

const SupportContentBlock = styled.div`
  padding-top: 1rem;
`;

function SupportContent() {
  return (
    <SupportContentBlock>
      <Title />
      <QRCode />
    </SupportContentBlock>
  );
}

export default SupportContent;
