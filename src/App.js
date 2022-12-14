import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Events from './components/Events';
import AddEditEvent from './components/AddEditEvent';
import About from './components/About';
import Test from './components/Test';
import { NotFound } from './components/NotFound';

import { Container } from 'react-bootstrap';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <Header branding="Find The Events" />
          <Container>
            <Switch>
              <Route exact path="/" component={Events} />
              <Route exact path="/event/add" component={AddEditEvent} />
              <Route exact path="/event/edit/:id" component={AddEditEvent} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
