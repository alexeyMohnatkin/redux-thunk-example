import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const PostCard = ({ post, className}) => {
  const preview = post.body.length > 40 ? `${post.body.substring(0, 40)}...` : post.body;

  return (
    <Card body className={className}>
      <CardTitle>{post.title}</CardTitle>
      <CardSubtitle className={styles.author}>
        by <Link to={`/users/${post.userId}`}>{post.author.name}</Link>
      </CardSubtitle>
      <CardText className={styles.body}>
        {preview}
      </CardText>
      <Button tag={Link} to={`/posts/${post.id}`}>Read post</Button>
    </Card>
  );
}

export default PostCard;

