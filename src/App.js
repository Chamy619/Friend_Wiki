import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/wiki/write/:owner" component={WritePage} />
      <Route exact path="/wiki" component={WikiPage} />
    </>
  );
}

export default App;
