import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Track from './Track';
import Home from './Home';
import NotFound from './NotFound';

import './styles.css';

function App() {
  const [tracks, setTracks] = useState('');

  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/track/:id" component={Track} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
