import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import { Link } from "react-router-dom";

const UserCard = ({ user, className }) => {
  return (
    <Card
      body
      className={className}
    >
      <CardTitle>{user.name}</CardTitle>
      <CardSubtitle>{user.company.name}</CardSubtitle>
      <br/>
      <CardText>
        Email: {user.email} <br />
        Phone: {user.phone} <br />
        Website: {user.website} <br />
      </CardText>
      <Button tag={Link} to={`/users/${user.id}`}>View details</Button>
    </Card>
  );
}

export default UserCard;

