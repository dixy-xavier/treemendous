import React from 'react';
import Search from '../Search/Search';
import styles from './Subheader.css';

const Subheader = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.header}>Tree showcase</h2>
    <Search />
  </div>
);

export default Subheader;
