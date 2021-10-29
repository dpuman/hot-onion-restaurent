import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {

  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
