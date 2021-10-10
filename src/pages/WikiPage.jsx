import HeaderContainer from '../containers/common/HeaderContainer';
import Home from '../components/home/Home';
import Template from '../components/common/Template';
import Ticket from '../components/common/Ticket';
import PostTickets from '../components/common/PostTickets';

function HomePage() {
  return (
    <>
      <HeaderContainer />
      <Template>
        {/* <Home /> */}
        <PostTickets
          posts={[
            { id: 1, title: '제목1' },
            { id: 2, title: '제목2' },
            { id: 3, title: '제목3' },
            { id: 4, title: '제목4' },
            { id: 5, title: '제목5' },
            { id: 6, title: '제목6' },
            { id: 7, title: '제목7' },
            { id: 8, title: '제목8' },
            { id: 9, title: '제목9' },
            { id: 10, title: '제목10' },
          ]}
        />
      </Template>
    </>
  );
}

export default HomePage;
