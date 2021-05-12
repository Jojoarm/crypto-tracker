import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoinSummary from './components/CoinSummary'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route>
            <CoinSummary exact path='/' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
