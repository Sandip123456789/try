import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

//#41B3A3
const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1A1A1D';
  });
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
