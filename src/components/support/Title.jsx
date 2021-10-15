import styled from 'styled-components';
import palette from '../../lib/style/palette';

const TitleBlock = styled.div`
  padding-top: 1rem;
  text-align: center;
  color: ${palette.gray[9]};

  h2 {
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
      <h2>개발자 후원</h2>
      <h4>고생한 개발자에게 커피 한 잔을 후원할 수 있습니다.</h4>
    </TitleBlock>
  );
}

export default Title;
