import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row,
  Col,
} from 'reactstrap';
import WithUsers from 'modules/users/containers/WithUsers'
import UserCard from '../UserCard'
import styles from './styles.module.css';

const UsersList = ({ users }) => {
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

export default WithUsers(UsersList);
