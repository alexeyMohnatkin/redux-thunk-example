import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row,
  Col,
  Alert,
} from 'reactstrap';
import UserCard from '../UserCard'
import styles from './styles.module.css';

const UsersList = ({ users, fetching, error }) => {
  if (fetching) {
    return <div>loading...</div>;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>
  }

  if (!users) {
    return null;
  }

  return (
    <Row>
      {users.map(user => (
        <Col
          className={styles.column}
          key={user.id}
          md="6"
        >
          <UserCard
            className={styles.user}
            user={user}
          />
        </Col>
      ))}
    </Row>
  );
}

export default UsersList;

