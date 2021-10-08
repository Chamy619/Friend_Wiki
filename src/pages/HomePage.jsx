import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';

const HomeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

function HomePage() {
  return (
    <>
      <HeaderContainer />
      <HomeBlock>
        <h1>서울의 마지막 금싸라기 땅 도봉구에 오신걸 환영합니다.</h1>
      </HomeBlock>
    </>
  );
}

export default HomePage;
