import styled from 'styled-components';

const FullScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MesseageBox = styled.div`
  width: 640px;
  text-align: center;
`;

function Oauth() {
  return (
    <FullScreen>
      <MesseageBox>
        <h2>카카오에서 인증받는 중입니다...</h2>
      </MesseageBox>
    </FullScreen>
  );
}

export default Oauth;
