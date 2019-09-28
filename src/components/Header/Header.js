import React from 'react';
import Image from '../Image/Image';
import styles from './Header.css';

const Header = () => (
  <div className={styles.wrapper}>
    <Image alt="Ecosia logo" className={styles.image} src="/assets/ecosia-48.png" />
    <h1 className={styles.header}>Ecosia Trees</h1>
  </div>
);

export default Header;
