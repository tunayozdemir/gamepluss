import './App.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><HomePage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
