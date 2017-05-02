import React, { Component } from 'react';
import { Provider} from 'react-redux';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Guesser from './components/Guesser'
import Configurator from './components/Configurator'
import store from './store/configStore'
import * as ActionCreator from './actions/ActionCreator'

store.dispatch(ActionCreator.setBgColor("#ffb2dc"));
store.dispatch(ActionCreator.setFgColor("#c4006a"));
store.dispatch(ActionCreator.setMin(0));
store.dispatch(ActionCreator.setMax(100));
console.log('store', store.getState().settings.bgColor);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{backgroundColor:store.getState().settings.bgColor}} className="main-wrapper">
            <Route path="/configuration" component={Configurator}/>
            <Route exact path="/" component={Guesser}/>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
