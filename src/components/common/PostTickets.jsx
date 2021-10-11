import styled from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';
import Ticket from './Ticket';

const PostTicketsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

const PencilBlock = styled.div`
  position: absolute;
  width: 4.5rem;
  right: 1rem;
  top: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 4.75rem;
  }
`;

function PostTickets({ posts, goWrite, showPost }) {
  if (!posts) {
    return null;
  }
  return (
    <PostTicketsBlock>
      {posts.map((post) => (
        <Ticket key={post.id} postId={post.id} showPost={showPost}>
          {post.title}
        </Ticket>
      ))}
      <PencilBlock onClick={goWrite}>
        <BsPencilSquare />
        <span> 글쓰기</span>
      </PencilBlock>
    </PostTicketsBlock>
  );
}

export default PostTickets;
