import HeaderContainer from '../containers/common/HeaderContainer';
import Home from '../components/home/Home';
import Template from '../components/common/Template';

function HomePage() {
  return (
    <>
      <HeaderContainer />
      <Template>
        <Home />
      </Template>
    </>
  );
}

export default HomePage;
