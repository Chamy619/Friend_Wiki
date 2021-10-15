import styled from 'styled-components';
import palette from '../../lib/style/palette';

const TitleBlock = styled.div`
  width: 100%;
  text-align: center;
  color: ${palette.gray[9]};
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
  h4 {
    margin-top: 0;
  }
`;

function Title() {
  return (
    <TitleBlock>
      <h3>개발자 후원</h3>
      <h4>고생한 개발자에게 커피 한 잔 후원 가능합니다.</h4>
    </TitleBlock>
  );
}

export default Title;
