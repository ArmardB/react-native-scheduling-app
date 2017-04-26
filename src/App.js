import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDTa7FXWjx8PeGf3gpusPrz6KY9fwDBl0k",
      authDomain: "employees-5ecb1.firebaseapp.com",
      databaseURL: "https://employees-5ecb1.firebaseio.com",
      projectId: "employees-5ecb1",
      storageBucket: "employees-5ecb1.appspot.com",
      messagingSenderId: "77761255386"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
