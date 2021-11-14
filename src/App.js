import './App.css';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import GenealogyPage from './pages/GenealogyPage';
import SupportPage from './pages/SupportPage';
import OauthPage from './pages/OauthPage';
import AuthenticationModalContainer from './containers/common/AuthenticationModalContainer';

function App() {
  return (
    <>
      <Helmet>
        <title>금싸라기</title>
      </Helmet>

      <Route exact path="/">
        <AuthenticationModalContainer />
        <HomePage />
      </Route>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/wiki/write/:owner">
        <AuthenticationModalContainer />
        <WritePage />
      </Route>
      <Route exact path="/wiki">
        <AuthenticationModalContainer />
        <WikiPage />
      </Route>
      <Route exact path="/genealogy">
        <AuthenticationModalContainer />
        <GenealogyPage />
      </Route>
      <Route exact path="/support" component={SupportPage} />
      <Route exact path="/oauth/authentication" component={OauthPage} />
      <Route exact path="/oauth/login" component={OauthPage} />
    </>
  );
}

export default App;
