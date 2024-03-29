import React from 'react';
import Search from '../Search/Search';
import styles from './Subheader.css';

const Subheader = ({ searchText = '', setSearchText = f => f }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.header}>Tree showcase</h2>
    <Search searchText={searchText} onSearch={setSearchText} />
  </div>
);

export default Subheader;
