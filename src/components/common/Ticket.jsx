import styled from 'styled-components';
import palette from '../../lib/style/palette';

const TicketBox = styled.div`
  width: 8rem;
  height: 12rem;
  border: 1px solid ${palette.gray[3]};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px 2px ${palette.gray[5]};
  background: ${palette.gray[0]};
  margin: 1rem;
  cursor: pointer;
  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    margin: 0;
    max-height: 80%;
    max-width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: norwap;
  }
`;

function Ticket({ postId, showPost, children }) {
  const handleClick = () => {
    showPost(postId);
  };
  return (
    <TicketBox onClick={handleClick}>
      <h3>{children}</h3>
    </TicketBox>
  );
}

export default Ticket;
