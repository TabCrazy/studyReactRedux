require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { hashHistory , Router , Route , IndexRoute } from 'react-router';

import Framework from './framework/';
import Metro from './metro/';

class AppComponent extends React.Component {
  render() {
    return ((
        <Router history = {hashHistory} >
            <Route path="/" component={Framework}>
              <IndexRoute component={Metro}/>
            </Route>
        </Router>

    ));
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
