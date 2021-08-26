import styled from 'styled-components';
import PostViewer from '../post/PostViewer';

const HomeBlock = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

function Home() {
  return (
    <HomeBlock>
      <PostViewer />
    </HomeBlock>
  );
}

export default Home;
