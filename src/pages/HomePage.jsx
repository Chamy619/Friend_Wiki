import styled from 'styled-components';
import palette from '../lib/style/palette';
import Template from '../components/common/Template';

const HomeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem);
  color: ${palette.gray[9]};

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

function HomePage() {
  return (
    <Template>
      <HomeBlock>
        <h1>서울의 마지막 금싸라기 땅 도봉구에 오신걸 환영합니다.</h1>
      </HomeBlock>
    </Template>
  );
}

export default HomePage;
