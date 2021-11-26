import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Classes from "./Components/Classes";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Scheduleclass from "./Components/ClassComponents/Scheduleclass";

function App () {
  return (
    <Router>
      <Navbar title="YogaFy" mode={ 'dark' } />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/classes' >
          <Classes />
        </Route>
        <Route exact path='/about' >
          <h1>This is About</h1>
        </Route>
        <Route exact path='/login' >
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/classes/scheduleclass'>
          <Scheduleclass />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
