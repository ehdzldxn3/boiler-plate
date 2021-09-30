import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Navbar from './components/views/NavBar/Navbar'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div>asdf</div>
        </Route>  
          {/* 로그인 */}
          <Route path='/login'>
            <LoginPage/>
          </Route>



      </Switch>
    </Router>
  );
}

export default App;
