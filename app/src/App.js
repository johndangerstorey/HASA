/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './Shorthand.css';
import Voting from './routes/voting'
import Landing from './routes/landing'
import GlobalWrapper from './stores/global'

function App() {
    return (
    <GlobalWrapper>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/:id" component={Voting} />
      </Router>
    </GlobalWrapper>
  );
}

export default App;
