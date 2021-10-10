import styled from 'styled-components';
import Ticket from './Ticket';

const PostTicketsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

function PostTickets({ posts }) {
  return (
    <PostTicketsBlock>
      {posts.map((post) => (
        <Ticket key={post.id}>{post.title}</Ticket>
      ))}
    </PostTicketsBlock>
  );
}

export default PostTickets;
