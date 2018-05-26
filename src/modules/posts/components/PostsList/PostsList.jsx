import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Alert,
  Row,
  Col,
} from 'reactstrap';
import PostCard from '../PostCard'
import styles from './styles.module.css';

const PostsList = ({ posts, fetching, error }) => {
  if (fetching) {
    return <div>loading...</div>;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>
  }

  if (!posts) {
    return null;
  }

  return (
    <Row>
      {posts.map(post => (
        <Col
          key={post.id}
          xs="12"
          sm="6"
          md="4"
          className={styles.column}
        >
          <PostCard
            className={styles.post}
            post={post}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PostsList;

