import Template from '../components/common/Template';
import WikiContents from '../components/common/WikiContents';
import WikiMainContainer from '../containers/common/WikiMainContainer';

function HomePage() {
  return (
    <Template>
      <WikiContents>
        <WikiMainContainer />
      </WikiContents>
    </Template>
  );
}

export default HomePage;
