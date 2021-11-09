import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Navbar from './components/views/NavBar/Navbar'


function App() {
  return (
    <Router>
      <Switch>

        {/* 메인페이지 */}
        <Route exact path='/' component={LandingPage} />

        {/* 로그인페이지 */}
        <Route path='/login' component={LoginPage} />

        {/*  */}
        <Route path='/register' component={RegisterPage} />

      </Switch>
    </Router>
  );
}

export default App;
