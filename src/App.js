import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Container } from 'reactstrap';
import Header from 'modules/layout/components/Header';
import HomePage from './pages/Home';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';
import styles from './App.module.css';

import reducers from './services/redux';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={styles.root}>
            <Header />
            <Container>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/users" component={UsersPage} />
              <Route exact path="/users/:id" component={UserPage} />
              <Route exact path="/posts" component={PostsPage} />
              <Route exact path="/posts/:id" component={PostPage} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
