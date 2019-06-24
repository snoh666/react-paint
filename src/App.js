import React from 'react';
import Paint from './components/paint';
import Home from  './components/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/react-paint">
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/paint/' component={Paint} />
      </div>
    </Router>
  );
}

export default App;