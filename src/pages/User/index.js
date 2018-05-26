import React, { Component } from 'react';
import { baseUrl } from 'config';
import UserDetails from 'modules/users/components/UserDetails'

class UserPage extends Component {
  state = {
    user: null,
    fetchingUserError: '',
    fetchingUser: false,
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.loadUser(userId);
  }

  loadUser(userId) {
    this.setState(() => ({
      fetchingUser: true,
      fetchingUserError: '',
    }));

    fetch(`${baseUrl}/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: can't load user`);
        }
        return response.json();
      })
      .then(user => {
        this.setState(() => ({
          user,
          fetchingUser: false,
        }));
      })
      .catch(error => {
        this.setState({
          fetchingUserError: error.message,
          fetchingUser: false,
        });
      });
  }

  render() {
    const { user, fetchingUser, fetchingUserError } = this.state;

    return (
      <div>
        {!!user && <h1>User {user.name}</h1>}
        <UserDetails
          user={user}
          fetching={fetchingUser}
          error={fetchingUserError}
        />
      </div>
    );
  }
}

export default UserPage;
