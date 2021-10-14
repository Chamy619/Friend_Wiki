import styled from 'styled-components';
import palette from '../../lib/style/palette';

const TitleBlock = styled.div`
  width: 100%;
  color: ${palette.gray[9]};
  text-align: center;
  h2 {
    margin-bottom: 0;
  }
  h4 {
    margin-top: 0;
  }
`;

function Title() {
  return (
    <TitleBlock>
      <h2>금싸라기 도봉국의 역대 왕 계보</h2>
      <h4>도봉국은 직선제로 왕을 선출합니다.</h4>
    </TitleBlock>
  );
}

export default Title;
