import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid' style={{backgroundColor: '#000', height: '100%', width: '100%'}}>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route render={() => <p>Not Found</p>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
