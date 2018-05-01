import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App from './views/Layout';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={App} />

          </Switch>
        </div>
      </Router>
    )
  }
}
export default Routes
