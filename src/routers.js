import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import About from './About/About';
import Examples from './Examples/Examples';
import Work from './Work/Work';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Item from './Item/Item';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
          <Route path="/work" component={Work} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/item/:url" component={Item} />
        </Route>
      </Router>
    )
  }
}

export default Routers;
