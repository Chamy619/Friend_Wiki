import HeaderContainer from '../containers/common/HeaderContainer';
import Template from '../components/common/Template';
import WikiMainContainer from '../containers/common/WikiMainContainer';

function HomePage() {
  return (
    <>
      <HeaderContainer />
      <Template>
        <WikiMainContainer />
      </Template>
    </>
  );
}

export default HomePage;
