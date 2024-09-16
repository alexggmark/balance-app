import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;