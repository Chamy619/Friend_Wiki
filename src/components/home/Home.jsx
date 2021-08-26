import styled from 'styled-components';
import PostViewerContainer from '../../containers/post/PostViewerContainer';

const HomeBlock = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

function Home() {
  return (
    <HomeBlock>
      <PostViewerContainer />
    </HomeBlock>
  );
}

export default Home;
