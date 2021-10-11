import HeaderContainer from '../containers/common/HeaderContainer';
import Home from '../components/home/Home';
import Template from '../components/common/Template';
import Ticket from '../components/common/Ticket';
import PostTickets from '../components/common/PostTickets';
import PostTicketsContainer from '../containers/common/PostTicketsContainer';

function HomePage() {
  return (
    <>
      <HeaderContainer />
      <Template>
        {/* <Home /> */}
        <PostTicketsContainer />
      </Template>
    </>
  );
}

export default HomePage;
