import React from 'react';
import {
  Alert,
  Button,
} from 'reactstrap';
import { Link } from "react-router-dom";

const UserDetails = ({ user, fetching, error }) => {
  if (fetching) {
    return <div>loading...</div>
  }

  if (error) {
    return (
      <div>
        <Alert color="danger">{error}</Alert>
        <Button tag={Link} to={`/users`}>Back to list</Button>
      </div>
    )
  }
  if (!user) {
    return null;
  }

  const address = `${user.address.zipcode}, ${user.address.city}, ${user.address.street}, ${user.address.suite}`;

  return (
    <div>
      <h4>Company: {user.company.name}</h4>
      <br/>
      Email: {user.email} <br />
      Phone: {user.phone} <br />
      Website: {user.website} <br />
      Address: {address} <br />

      <Button tag={Link} to={`/users`}>Back to list</Button>
    </div>
  );
}

export default UserDetails;

