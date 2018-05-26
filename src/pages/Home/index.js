import React from 'react';
import logo from './redux-logo.png';
import styles from './styles.module.css';


const HomePage = () => (
  <div className={styles.root}>

    <img className={styles.logo} src={logo} alt="redux" />
  </div>
);

export default HomePage;
