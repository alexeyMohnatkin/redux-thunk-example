import React from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => (
  <div className={styles.root}>
    <Container>
      <Nav>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/users">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/posts">Posts</NavLink>
        </NavItem>
      </Nav>
    </Container>
  </div>
);

export default Header;
