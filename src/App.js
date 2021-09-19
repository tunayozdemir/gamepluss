import './App.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Games from './pages/Games'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><Games /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
