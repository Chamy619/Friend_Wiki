import styled from 'styled-components';

const QRCodeBlock = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
`;

function QRCode() {
  return (
    <QRCodeBlock>
      <img src="kakaopay.png" alt="개발자 후원" />
    </QRCodeBlock>
  );
}

export default QRCode;
