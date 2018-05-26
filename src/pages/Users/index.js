import React, { Component } from 'react';
import UsersList from 'modules/users/components/UsersList'
import { baseUrl } from 'config';

class UsersPage extends Component {
  state = {
    users: null,
    fetchingUsers: false,
    fetchingUsersError: '',
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    this.setState(() => ({
      fetchingUsers: true,
      fetchingUsersError: '',
    }));

    fetch(`${baseUrl}/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load users list`);
        }
        return response.json();
      })
      .then(users => {
        this.setState(() => ({
          users,
          fetchingUsers: false,
        }));
      })
      .catch(error => {
        this.setState({
          fetchingUsersError: error.message,
          fetchingUsers: false,
        });
      });
  }

  render() {
    const {
      users,
      fetchingUsers,
      fetchingUsersError,
    } = this.state;

    return (
      <div>
        <h1>Users</h1>
        <UsersList
          users={users}
          fetching={fetchingUsers}
          error={fetchingUsersError}
        />
      </div>
    );
  }
}

export default UsersPage;
