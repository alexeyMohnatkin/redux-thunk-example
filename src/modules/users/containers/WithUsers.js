import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from 'modules/users/actions';
import { Alert } from 'reactstrap'


export default (WrappedComponent) => {
  class WithUsers extends Component {
    componentDidMount() {
      if (!this.props.users) {
        this.props.loadUsers();
      }
    }

    render() {
      const { fetchingUsers, fetchingUsersError, ...props } = this.props;

      if (!props.users) {
        return null;
      }

      if (fetchingUsers) {
        return <div>loading...</div>;
      }

      if (fetchingUsersError) {
        return <Alert color="danger">{fetchingUsersError}</Alert>
      }

      return <WrappedComponent {...props} />
    }

  }
  const mapStateToProps = (state) => ({
    users: state.users.users,
    fetchingUsers: state.users.fetchingUsers,
    fetchingUsersError: state.users.fetchingUsersError,
  })

  return connect(mapStateToProps, { loadUsers })(WithUsers);
}