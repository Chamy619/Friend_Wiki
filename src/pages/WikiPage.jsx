import HeaderContainer from '../containers/common/HeaderContainer';
import Home from '../components/home/Home';
import Template from '../components/common/Template';
import Ticket from '../components/common/Ticket';
import PostTickets from '../components/common/PostTickets';
import PostTicketsContainer from '../containers/common/PostTicketsContainer';
import WikiMainContainer from '../containers/common/WikiMainContainer';

function HomePage() {
  return (
    <>
      <HeaderContainer />
      <Template>
        {/* <Home /> */}
        <WikiMainContainer />
      </Template>
    </>
  );
}

export default HomePage;
