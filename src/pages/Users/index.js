import React, { Component } from 'react';
import UsersList from 'modules/users/components/UsersList'


class UsersPage extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <UsersList />
      </div>
    );
  }
}

export default UsersPage;