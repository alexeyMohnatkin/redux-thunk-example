import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import Header from 'modules/layout/components/Header';
import HomePage from './pages/Home';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
