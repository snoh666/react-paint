import React from 'react';
import Game from './components/game';
import Home from  './components/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/react-paint">
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/game/' component={Game} />
      </div>
    </Router>
  );
}

export default App;